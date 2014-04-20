using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace BoardUp.Models
{
    public class Permission
    {
        [Key]
        public int PermissionId { get; set; }
        public string UserId { get; set; }
        public int BoardId { get; set; }
        public bool AddObject { get; set; }
        public bool DeleteObject { get; set; }
        public bool EditObject { get; set; }

      //  [ForeignKey("UserID")]
       // public virtual UserProfile UserProfile { get; set; }
       // public virtual Board Board { get; set; }
    }
}