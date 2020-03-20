using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Net.Mail;
using System.Text.RegularExpressions;
using System.Web;
using System.Web.Configuration;
using avs4youAPI.Models;
using Newtonsoft.Json;
using Nustache.Core;

namespace avs4youAPI.Controllers
{
    public class SmtpSender
    {
        private const string DefaultEmailLogName = "default-email-log.txt";
        private string SmtpServerName;
        private string SmtpPort;
        private string Login;
        private string Sender;
        private string Password;
        private string EmailPatternsBaseDir;

        public SmtpSender()
        {

            SmtpServerName = WebConfigurationManager.AppSettings["SmtpServer"] ?? String.Empty;
            SmtpPort = WebConfigurationManager.AppSettings["SmtpPort"] ?? String.Empty;
            Login = WebConfigurationManager.AppSettings["SmtpLogin"] ?? String.Empty;
            Sender = WebConfigurationManager.AppSettings["SmtpSender"] ?? String.Empty;
            Password = WebConfigurationManager.AppSettings["SmtpPassword"] ?? String.Empty;
            EmailPatternsBaseDir = WebConfigurationManager.AppSettings["EmailPatternsBaseDir"] ?? String.Empty;

        }

        public bool SendCouponEmail(Email couponEmail)
        {
            try
            {
                var template = File.ReadAllText(System.Web.Hosting.HostingEnvironment.MapPath(EmailPatternsBaseDir + "/" + couponEmail.MailPatternName));
                var data = new Dictionary<string, string>();
                var validUntil = DateTime.Today.AddMonths(1).ToString("MM/dd/yyyy");

                data.Add("validUntil", validUntil);
                var emailBody = HttpUtility.HtmlDecode(ProcessTemplate(template, data));

                return SendEmail(couponEmail.UserEmail, emailBody);

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return false;
            }
        }
        private bool SendEmail(string to, string emailBody)
        {
            int Port;
            if (
                String.IsNullOrEmpty(SmtpServerName) || String.IsNullOrEmpty(SmtpPort) || String.IsNullOrEmpty(Login) ||
                String.IsNullOrEmpty(Password) || !int.TryParse(SmtpPort, out Port))
            {
                return false;
            }

            try
            {

                MailMessage mail = new MailMessage();
                SmtpClient SmtpServer = new SmtpClient(SmtpServerName);

                mail.From = new MailAddress(Sender);
                mail.To.Add(to);
                mail.IsBodyHtml = true;
                mail.Subject = "Test Mail";
                mail.Body = emailBody;

                SmtpServer.Port = Port;
                SmtpServer.Credentials = new System.Net.NetworkCredential(Login, Password);
                SmtpServer.Send(mail);

                return true;

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return false;
            }
        }

        private static string ProcessTemplate(string template, Dictionary<string, string> data)
        {
            return Render.StringToString(template, data);
        }
    }
}