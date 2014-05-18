using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Web;

namespace BoardUp.Models
{
    public class ObjectDatabase : DbContext
    {
        public ObjectDatabase() : base("DefaultConnection") 
        {
            //Database.SetInitializer<ObjectDatabase>(new MyContextInitializer());
        }
        public DbSet<GraphicObject> GraphicObjects { get; set; }
        public DbSet<Friendship> Friendships { get; set; }
        public DbSet<Permission> Permissions { get; set; }
        public DbSet<Board> Boards { get; set; }
        public DbSet<ChatObject> ChatLog { get; set; }
    }
}