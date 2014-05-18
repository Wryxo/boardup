using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BoardUp.Models
{
    public class ChatObject
    {
        public int ChatObjectId { get; set; }
        public int BoardId { get; set; }
        public string User { get; set; }
        public string Message { get; set; }
        public DateTime Timestamp { get; set; }
    }
}