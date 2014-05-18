using BoardUp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;

namespace BoardUp.Controllers
{
    [Authorize]
    public class AdminController : Controller
    {
        //
        // GET: /Admin/
        [HttpGet]
        public ActionResult Index()
        {
            ViewBag.Status = "";
            return View();
        }

        [HttpPost]
        public ActionResult Index(AdminViewModel a)
        {
            ViewBag.Status = "";
            return View(a.ViewName);
        }

        [HttpPost]
        public ActionResult _BoardPartial(Board a)
        {
            a.UserId = User.Identity.GetUserId();
            using (var db = new ObjectDatabase())
            {
                db.Boards.Add(a);
                db.SaveChanges();
                db.Permissions.Add(new Permission { UserId = a.UserId, BoardId = a.BoardId, AddObject = true, DeleteObject = true, EditObject = true });
                db.SaveChanges();
            }
            ViewBag.Status = "success";
            return RedirectToAction("BoardList");
        }

        [HttpPost]
        public ActionResult _FriendPartial(Friendship a)
        {
            a.UserId = User.Identity.GetUserId();
            using (var db = new ObjectDatabase())
            {
                db.Friendships.Add(a);
                db.SaveChanges();
            }
            ViewBag.Status = "success";
            return RedirectToAction("FriendList");
        }

        [HttpPost]
        public ActionResult _PermissionPartial(Permission a)
        {
            //a.UserId = User.Identity.GetUserId();
            using (var db = new ObjectDatabase())
            {
                db.Permissions.Add(a);
                db.SaveChanges();
            }
            ViewBag.Status = "success";
            return RedirectToAction("PermissionList");
        }

        [HttpGet]
        public ActionResult BoardList()
        {
            var objs = new List<BoardList>();
            var uid = User.Identity.GetUserId();
            using (var db = new ObjectDatabase())
            {
                var x = db.Boards.Join(db.Permissions, c => c.BoardId, cm => cm.BoardId, (a, b) => new BoardList { BoardId = a.BoardId, Owner = b.UserId, Name = a.Name }).Where(m => m.Owner == uid);
                objs.AddRange(x.ToArray());
            }
            return View(objs);
        }

        [HttpGet]
        public ActionResult PermissionList()
        {
            var objs = new List<Permission>();
            using (var db = new ObjectDatabase())
            {
                objs.AddRange(db.Permissions.ToArray());
            }
            return View(objs);
        }

        [HttpGet]
        public ActionResult FriendList()
        {
            var objs = new List<Friendship>();
            var uid = User.Identity.GetUserId();
            using (var db = new ObjectDatabase())
            {
                var x = db.Friendships.Where(m => (m.UserId == uid || m.FriendId == uid));
                objs.AddRange(x.ToArray());
            }
            ViewBag.User = uid;
            return View(objs);
        }

        [HttpGet]
        public ActionResult AcceptFriend(int? id)
        {
                using (var db = new ObjectDatabase())
                {
                    var x = db.Friendships.SingleOrDefault(m => m.FriendshipId == id);
                    if (x == null)
                        return new HttpNotFoundResult();
                    x.Accepted = true;
                    db.SaveChanges();
                }
                return RedirectToAction("FriendList", "Admin");
        }

        [HttpGet]
        public ActionResult DeclineFriend(int? id)
        {
            using (var db = new ObjectDatabase())
            {
                var x = db.Friendships.Single(m => m.FriendshipId == id);
                if (x == null)
                    return new HttpNotFoundResult();
                db.Friendships.Remove(x);
                db.SaveChanges();
            }
            return RedirectToAction("FriendList", "Admin");
        }
	}
}