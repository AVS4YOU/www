using avs4youAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace avs4youAPI.Classes
{
    public class LocalFileManager : IFileManager
    {
        private readonly string folder;

        private const string DataFolder = "App_Data";

        private const string TempData = "temp";

        public LocalFileManager(string folder)
        {
            this.folder = folder;
        }

        public string SaveFile(HttpPostedFile file)
        {
            var fileName = Path.GetFileName(file.FileName).Replace(' ', '_');

            if (fileName == null)
                throw new Exception("File is null");

            var folderPath = Path.Combine(HttpContext.Current.Server.MapPath("~"), DataFolder, folder, TempData);

            if (!Directory.Exists(folderPath))
            {
                Directory.CreateDirectory(folderPath);
            }

            var path = Path.Combine(folderPath, fileName);
            file.SaveAs(path);

            return Path.Combine(DataFolder, folder, fileName);
        }

        public void DeleteFile(string fileName)
        {
            if (fileName == null)
                throw new Exception("File is null");

            var FilePath = Path.Combine(HttpContext.Current.Server.MapPath("~"), DataFolder, folder, TempData, fileName);

            if (File.Exists(FilePath))
            {
                File.Delete(FilePath);
            }
            
        }

        public byte[] GetFile(string fileName)
        {
            var filePath = Path.Combine(HttpContext.Current.Server.MapPath("~"), DataFolder, folder, fileName);

            if (!File.Exists(filePath)) return new byte[] { };

            return File.ReadAllBytes(filePath);
        }

        public static Dictionary<string, string> fillRequestRepository(string path, string[] imageNames)
        {

            var filesLinks = new List<string>();
            Dictionary<string, string> requestData = new Dictionary<string, string>();
            var pathToSupportFolder = Path.Combine(HttpContext.Current.Server.MapPath("~"), DataFolder, "Files");
            var pathToTemp = Path.Combine(pathToSupportFolder, TempData);
            string pathToFolderRequest = "";
            string domainName = HttpContext.Current.Request.Url.GetLeftPart(UriPartial.Authority);

            requestData.Add("requestFolder", Path.Combine(pathToSupportFolder, path));


            if (imageNames != null)
            {
                foreach (string name in imageNames)
                {
                    pathToFolderRequest = Path.Combine(pathToSupportFolder, path, name);
                    var s = FileHelper.GetFile(pathToTemp, name);
                    if (s != null)
                    {
                        if (!File.Exists(pathToFolderRequest))
                        {
                            File.Move(Path.Combine(pathToTemp, name), pathToFolderRequest);
                            filesLinks.Add(domainName + (System.Web.Hosting.HostingEnvironment.MapPath(DataFolder + "/Files/" + path + "/" + name)));

                        }
                        else
                        {
                            File.Delete(Path.Combine(pathToTemp, name));
                        }
                    }
                }
            }
            if (filesLinks != null)
            {
                var filesLinksHTML = new List<string>();
                var arrayLinks = filesLinks.ToArray();
                string[] t = { };
                var nameLinkFile = "";
                foreach (string link in arrayLinks)
                {
                    t = link.Split(new char[] { '/' });
                    nameLinkFile = t[t.Length - 1];
                    filesLinksHTML.Add(String.Format("<a href='{0}' target='_blank'>{1}</a>", link, nameLinkFile));
                }

                requestData.Add("stringFileLinks", String.Join(", ", filesLinksHTML.ToArray()));
            }
            return requestData;
        }
    }
}