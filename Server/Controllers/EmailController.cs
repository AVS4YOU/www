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
using HttpPostAttribute = System.Web.Http.HttpPostAttribute;

namespace avs4youAPI.Controllers
{
    public class EmailController : ApiController
    {
        [HttpPost]
        [EnableCors(origins: "http://localhost:8000", headers: "*", methods: "*")]
        public string Post([FromBody]Email emailData)
        {
            SmtpSender Sender = new SmtpSender();
            RecaptchaController recaptchaController = new RecaptchaController();

            var ip = string.Empty;

            try
            {
                ip = HttpContext.Current.Request.ServerVariables["REMOTE_ADDR"];
            } catch(Exception ex)
            {
                Console.WriteLine(ex);
            }

            if(!recaptchaController.ValidateRecaptcha(emailData.RecaptchaValue, ip))
            {
                return "Error recaptcha";
            }

            switch (emailData.MailType)
            {
                case "getCoupon":
                    if (Sender.SendCouponEmail(emailData))
                    {
                        return emailData.UserEmail;
                    }
                    break;

                case "reseller":
                    if (Sender.SendResellerEmail(emailData))
                    {
                        return emailData.UserEmail;
                    }
                    break;

                case "education":
                    if (Sender.SendEducationEmail(emailData))
                    {
                        return emailData.UserEmail;
                    }
                    break;

                case "support":
                    if (Sender.SendSupportEmail(emailData))
                    {
                        return emailData.UserEmail;
                    }
                    break;

                default:
                    return "Error MailType is undefined";
            }

            return "Error email sending";
        }
    }
}
