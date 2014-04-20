using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace BoardUp.Models
{
    public class Board
    {
        //[Key]
        public int BoardId { get; set; }
        public string UserId { get; set; }
        public string Name { get; set; }

       // [ForeignKey("OwnerID")]
       // public virtual UserProfile UserProfile { get; set; }
    }
}