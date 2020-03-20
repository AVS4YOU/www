using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using avs4youAPI.Models;

namespace avs4youAPI.Controllers
{
    [EnableCors(origins: "http://localhost:8000", headers: "*", methods: "*")]
    public class EmailController : ApiController
    {
        [HttpPost]
        public string Post([FromBody]Email emailData)
        {
            SmtpSender Sender = new SmtpSender();

            switch (emailData.MailType)
            {
                case "getCoupon":
                    if (Sender.SendCouponEmail(emailData))
                    {
                        return emailData.UserEmail;
                    }
                    break;

                case "anotherType":
                    break;

                default:
                    return "Error MailType is undefined";
            }

            return "Error email sending";
        }
    }
}
