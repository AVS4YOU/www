using Newtonsoft.Json.Linq;
using System;
using System.IO;
using System.Net;
using System.Web.Configuration;

namespace avs4youAPI.Controllers
{
    public class RecaptchaController
    {
        public bool ValidateRecaptcha(string response, string ip)
        {
            try
            {
                var data = string.Format("secret={0}&remoteip={1}&response={2}", WebConfigurationManager.AppSettings["recaptcha.private-key"], ip, response);
                var url = WebConfigurationManager.AppSettings["recaptcha.verify-url"] ?? "https://www.google.com/recaptcha/api/siteverify";

                var webRequest = (HttpWebRequest)WebRequest.Create(url);
                webRequest.Method = WebRequestMethods.Http.Post;
                webRequest.ContentType = "application/x-www-form-urlencoded";
                webRequest.ContentLength = data.Length;
                using (var writer = new StreamWriter(webRequest.GetRequestStream()))
                {
                    writer.Write(data);
                }

                using (var webResponse = webRequest.GetResponse())
                using (var reader = new StreamReader(webResponse.GetResponseStream()))
                {
                    var resp = reader.ReadToEnd();
                    var resObj = JObject.Parse(resp);

                    if (resObj["success"] != null && resObj.Value<bool>("success") == true)
                    {
                        return true;
                    }
                    else if (resObj["error-codes"] != null && resObj["error-codes"].HasValues)
                    {
                        Console.WriteLine(resp);
                        return false;
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
            }
            return false;
        }
    }
}