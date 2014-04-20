using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace BoardUp.Models
{
    public class GraphicObject
    {
      //  [Key]
        public int GraphicObjectId { get; set; }
        public int BoardId { get; set; }
        public string type { get; set; }
        public int x { get; set; }
        public int y { get; set; }
        public int width { get; set; }
        public int height { get; set; }
        public string fill { get; set; }
        public string stroke { get; set; }
        public int stroke_width { get; set; }

       // [ForeignKey("tid")]
       //public virtual Board Board { get; set; }

    }
}