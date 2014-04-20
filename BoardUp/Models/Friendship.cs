using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace BoardUp.Models
{
    public class Friendship
    {
       // [Key]
        public int FriendshipId { get; set; }
        public string UserId { get; set; }
        public string FriendId { get; set; }
        public bool Accepted { get; set; }

        //[ForeignKey("FriendId")]
        //public virtual UserProfile UserProfile { get; set; }
       // [ForeignKey("UserID")]
       // public virtual UserProfile UserProfilee { get; set; }
    }
}