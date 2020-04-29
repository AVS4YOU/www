using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace avs4youAPI.Models
{
    public class Email
    {
        public String UserEmail { get; set; }
        public String UserName { get; set; }
        public int NumOfSubs { get; set; }
        public string Comment { get; set; }
        public string Occupation { get; set; }
        public string Institution { get; set; }
        public String Description { get; set; }
        public String MailPatternName { get; set; }
        public String MailType { get; set; }
        public String RecaptchaValue { get; set; }
        public String[] FileNames { get; set; }
    }
}