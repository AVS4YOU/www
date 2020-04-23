using avs4youAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;

namespace avs4youAPI.Classes
{
    public class FileHelper
    {

        public const string SupportRequestFolder = "File";
        public static int MaxFileSize;
        public static bool UseStorage;

        static FileHelper()
        {
            int.TryParse(ConfigurationManager.AppSettings["maxFileSize"] ?? "10485760", out MaxFileSize);
            bool.TryParse(ConfigurationManager.AppSettings["useDataStorage"] ?? "true", out UseStorage);
        }

        public static string SaveFile(string folder, HttpPostedFile file)
        {
            if (file == null)
            {
                throw new Exception("File is null");
            }

            if (file.ContentLength <= 0 || MaxFileSize < file.ContentLength)
            {
                throw new Exception("File size is incorrect");
            }

            return GetFileManager(folder).SaveFile(file);
        }

        public static byte[] GetFile(string folder, string fileName)
        {
            return GetFileManager(folder).GetFile(fileName);
        }

        private static IFileManager GetFileManager(string folder)
        {

            return new LocalFileManager(folder);
        }

    }
}