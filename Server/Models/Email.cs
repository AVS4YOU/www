using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace avs4youAPI.Models
{
    public class Email
    {
        public String UserEmail { get; set; }
        public String Name { get; set; }
        public int numOfSubs { get; set; }
        public String Description { get; set; }
        public String MailPatternName { get; set; }
        public String MailType { get; set; }
    }
}