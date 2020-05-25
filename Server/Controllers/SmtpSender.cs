using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Net.Mail;
using System.Net.Mime;
using System.Text.RegularExpressions;
using System.Web;
using System.Web.Configuration;
using avs4youAPI.Models;
using Newtonsoft.Json;
using Nustache.Core;
using avs4youAPI.Classes;

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

        private string SalesEmail;
        private string SupportEmail;

        public SmtpSender()
        {

            SmtpServerName = WebConfigurationManager.AppSettings["SmtpServer"] ?? String.Empty;
            SmtpPort = WebConfigurationManager.AppSettings["SmtpPort"] ?? String.Empty;
            Login = WebConfigurationManager.AppSettings["SmtpLogin"] ?? String.Empty;
            Sender = WebConfigurationManager.AppSettings["SmtpSender"] ?? String.Empty;
            Password = WebConfigurationManager.AppSettings["SmtpPassword"] ?? String.Empty;
            EmailPatternsBaseDir = WebConfigurationManager.AppSettings["EmailPatternsBaseDir"] ?? String.Empty;

            SalesEmail = WebConfigurationManager.AppSettings["SalesEmail"] ?? String.Empty;
            SupportEmail = WebConfigurationManager.AppSettings["SupportEmail"] ?? String.Empty;

        }

        public bool SendCouponEmail(Email emailData)
        {
            try
            {
                var template = File.ReadAllText(System.Web.Hosting.HostingEnvironment.MapPath(EmailPatternsBaseDir + "/" + emailData.MailPatternName));
                var data = new Dictionary<string, string>();
                var validUntil = DateTime.Today.AddMonths(1).ToString("MM/dd/yyyy");

                data.Add("validUntil", validUntil);
                var emailBody = HttpUtility.HtmlDecode(ProcessTemplate(template, data));

                return SendEmail(emailData.UserEmail, emailBody, "Get coupon email");

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return false;
            }
        }

        public bool SendResellerEmail(Email emailData)
        {
            try
            {
                var template = File.ReadAllText(System.Web.Hosting.HostingEnvironment.MapPath(EmailPatternsBaseDir + "/" + emailData.MailPatternName));
                var data = new Dictionary<string, string>();

                data.Add("UserEmail", emailData.UserEmail);
                data.Add("UserName", emailData.UserName);
                data.Add("NumOfSubs", emailData.NumOfSubs.ToString());
                data.Add("Comment", emailData.Comment);

                var emailBody = HttpUtility.HtmlDecode(ProcessTemplate(template, data));

                return SendEmail(SalesEmail, emailBody, "Reseller email");

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return false;
            }
        }

        public bool SendEducationEmail(Email emailData)
        {
            try
            {
                var template = File.ReadAllText(System.Web.Hosting.HostingEnvironment.MapPath(EmailPatternsBaseDir + "/" + emailData.MailPatternName));
                var data = new Dictionary<string, string>();

                data.Add("UserEmail", emailData.UserEmail);
                data.Add("UserName", emailData.UserName);
                data.Add("NumOfSubs", emailData.NumOfSubs.ToString());
                data.Add("Comment", emailData.Comment);
                data.Add("Occupation", emailData.Occupation);
                data.Add("Institution", emailData.Institution);

                var emailBody = HttpUtility.HtmlDecode(ProcessTemplate(template, data));

                return SendEmail(SalesEmail, emailBody, "Education email");

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return false;
            }
        }

        public bool SendSupportEmail(Email emailData)
        {
            try
            {
                var template = File.ReadAllText(System.Web.Hosting.HostingEnvironment.MapPath(EmailPatternsBaseDir + "/" + emailData.MailPatternName));
                var data = new Dictionary<string, string>();

                data.Add("UserEmail", emailData.UserEmail);
                data.Add("UserName", emailData.UserName);
                data.Add("NumOfSubs", emailData.NumOfSubs.ToString());
                data.Add("Comment", emailData.Comment);

                var emailBody = HttpUtility.HtmlDecode(ProcessTemplate(template, data));

                if (emailData.FileNames == null)
                {
                    return SendEmail(SupportEmail, emailBody, "Support email");

                } else
                {
                    return SendEmail(SupportEmail, emailBody, "Support email", emailData.FileNames);
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return false;
            }
        }

        private bool SendEmail(string to, string emailBody, string subject, params string[] fileNames)
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

                SmtpClient SmtpServer = new SmtpClient(SmtpServerName);

                SmtpServer.EnableSsl = true;
                SmtpServer.Port = Port;
                SmtpServer.Credentials = new System.Net.NetworkCredential(Login, Password);

                using (var mailMessage = new MailMessage())
                {

                    mailMessage.From = new MailAddress(Sender);
                    mailMessage.To.Add(to);
                    mailMessage.IsBodyHtml = true;
                    mailMessage.Subject = subject;
                    mailMessage.Body = emailBody;

                    if (fileNames.Length > 0)
                    {
                        for (var i = 0; i < fileNames.Length; i++)
                        {
                            string filePath = Path.Combine(HttpContext.Current.Server.MapPath("~"), "App_Data", "File", "temp", fileNames[i].Replace(' ', '_'));
                            Attachment attach = new Attachment(filePath, MediaTypeNames.Application.Octet);

                            ContentDisposition disposition = attach.ContentDisposition;
                            disposition.CreationDate = System.IO.File.GetCreationTime(filePath);
                            disposition.ModificationDate = System.IO.File.GetLastWriteTime(filePath);
                            disposition.ReadDate = System.IO.File.GetLastAccessTime(filePath);

                            mailMessage.Attachments.Add(attach);
                        }
                    }

                    SmtpServer.Send(mailMessage);
                }

                DeleteTempFiles(fileNames);

                return true;

            }
            catch (Exception ex)
            {
                DeleteTempFiles(fileNames);

                Console.WriteLine(ex.Message);
                return false;
            }
        }

        private static string ProcessTemplate(string template, Dictionary<string, string> data)
        {
            return Render.StringToString(template, data);
        }

        private void DeleteTempFiles(params string[] fileNames)
        {
            if (fileNames.Length > 0)
            {
                foreach (var file in fileNames)
                {
                    LocalFileManager localFileManager = new LocalFileManager(FileHelper.SupportRequestFolder);
                    localFileManager.DeleteFile(file);
                }
            }
        }

    }
}