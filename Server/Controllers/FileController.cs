using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Configuration;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Mvc;
using avs4youAPI.Models;
using avs4youAPI.Classes;
using HttpPostAttribute = System.Web.Http.HttpPostAttribute;

namespace avs4youAPI.Controllers
{
    public class FileController : ApiController
    {
        [HttpPost]
        [EnableCors(origins: "http://localhost:8000", headers: "*", methods: "*")]
        public string Upload()
        {
            var request = HttpContext.Current.Request;

            try
            {

                if (request.Files.Count == 0)
                {
                    return "The uploaded file could not be found";
                }

                if (request.Files.Count > 10)
                {
                    return "More than 10 files";
                }

                var files = new List<HttpPostedFile>();

                foreach (var key in request.Files.AllKeys)
                {
                    files.AddRange(request.Files.GetMultiple(key));
                }

                var result = new List<UploadedFile>();

                foreach (var file in files)
                {
                    result.Add(new UploadedFile
                    {
                        FileName = file.FileName,
                        FilePath = FileHelper.SaveFile(FileHelper.SupportRequestFolder, file),
                        ContentLength = file.ContentLength
                    });
                }

                return "file uploaded";
            }
            catch
            {
                return "file uploaded error";
            }
        }
    }

    class UploadedFile
    {
        public string FileName;
        public string FilePath;
        public int ContentLength;
    }
}
