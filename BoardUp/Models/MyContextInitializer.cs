using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace BoardUp.Models
{
    public class MyContextInitializer : DropCreateDatabaseIfModelChanges<ObjectDatabase>
    {
        protected override void Seed(ObjectDatabase context)
        {
            context.Boards.Add(new Board { UserId = "1", Name = "Prva" });
            //context.Boards.Add(new Board { UserId = 1, Name = "Druha" });
            //context.Friendships.Add(new Friendship { UserId = 1, FriendId = 2, Accepted = true });
            //context.Permissions.Add(new Permission { BoardId = 1, UserId = 1, AddObject = true, EditObject = true, DeleteObject = true });
            //context.Permissions.Add(new Permission { BoardId = 1, UserId = 2, AddObject = false, EditObject = true, DeleteObject = false });
            //context.GraphicObjects.Add(new GraphicObject { BoardId = 1, x = 10, y = 10, width = 50, height = 50, type = "rect", fill = "#0f0", stroke = "#ff0", stroke_width = 1 }); 
            //EF will call SaveChanges itself
        }
    }
}