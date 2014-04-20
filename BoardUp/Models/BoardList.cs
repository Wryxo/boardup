using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BoardUp.Models
{
    public class BoardList
    {
        public int BoardId { get; set; }
        public string Owner { get; set; }
        public string Name { get; set; }
        public bool AddObject { get; set; }
        public bool DeleteObject { get; set; }
        public bool EditObject { get; set; }
    }
}