using BoardUp.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System.Threading;
using System.Runtime.CompilerServices;
using System.Text;
using System.Web.Script.Serialization;

namespace BoardUp.Controllers
{
    [Authorize]
    public class BoardController : Controller
    {
        [HttpGet]
        public ActionResult Index(int? id)
        {
            string uid = User.Identity.GetUserId();
            if (id != null)
            {
                using (var db = new ObjectDatabase()) {
                    var x = db.Permissions.SingleOrDefault(m => (m.BoardId == id && m.UserId == uid));
                    if (x != null) {
                        return View();
                    }
                }
            }
            return new HttpNotFoundResult();
        }

        // Pridanie objektu do tabule
        [HttpPost]
        public JsonResult Index(GraphicObject aaa)
        {
            var objs = new List<GraphicObject>();
            string uid = User.Identity.GetUserId();
            using (var db = new ObjectDatabase())
            {
                var z = db.Permissions.SingleOrDefault(m => (m.BoardId == aaa.BoardId && m.UserId == uid && m.AddObject == true));
                if (z != null) { 
                    db.GraphicObjects.Add(aaa);
                    db.SaveChanges();
                }
                var x = db.GraphicObjects.Where(m => m.BoardId == aaa.BoardId);
                objs.AddRange(x.ToArray());
            }
            return Json(objs);
        }

       /* [HttpGet]
        public ActionResult List(int? id)
        {
            if (id != null)
            {
                var objs = new List<GraphicObject>();
                using (var db = new ObjectDatabase())
                {
                    var x = db.GraphicObjects.Where(m => m.BoardId == id).OrderBy(m => m.GraphicObjectId);
                    objs.AddRange(x.ToArray());
                }

                return View(objs);
            }
            return new HttpNotFoundResult();
        }*/

        // Request na obnovenie objektov na tabuli
        [HttpPost]
        public JsonResult Refresh(GraphicObject aaa)
        {
            var objs = new List<GraphicObject>();
            using (var db = new ObjectDatabase())
            {
                var x = db.GraphicObjects.Where(m => m.BoardId == aaa.BoardId);
                objs.AddRange(x.ToArray());
            }
            return Json(objs);
        }

        // Zmen objekt v databaze
        [HttpPost]
        public JsonResult Update(GraphicObject aaa)
        {
            string uid = User.Identity.GetUserId();
            var objs = new List<GraphicObject>();
            using (var db = new ObjectDatabase())
            {
                var z = db.Permissions.SingleOrDefault(m => (m.BoardId == aaa.BoardId && m.UserId == uid && m.EditObject == true));
                if (z != null)
                {
                    var obj = db.GraphicObjects.SingleOrDefault(m => m.GraphicObjectId == aaa.GraphicObjectId);
                    if (obj != null)
                    {
                        obj.x = aaa.x;
                        obj.y = aaa.y;
                        obj.fill = aaa.fill;
                        obj.stroke = aaa.stroke;
                        obj.stroke_width = aaa.stroke_width;
                        obj.width = aaa.width;
                        obj.height = aaa.height;
                        db.SaveChanges();
                    }
                }
                var x = db.GraphicObjects.Where(m => m.BoardId == aaa.BoardId);
                objs.AddRange(x.ToArray());
            }
            return Json(objs);
        }

        // Zmaz objekt z databazy
        [HttpPost]
        public JsonResult Delete(GraphicObject aaa)
        {
            string uid = User.Identity.GetUserId();
            var objs = new List<GraphicObject>();
            using (var db = new ObjectDatabase())
            {
                var z = db.Permissions.SingleOrDefault(m => (m.BoardId == aaa.BoardId && m.UserId == uid && m.DeleteObject == true));
                if (z != null)
                {
                    var obj = db.GraphicObjects.SingleOrDefault(m => m.GraphicObjectId == aaa.GraphicObjectId);
                    if (obj != null)
                    {
                        db.GraphicObjects.Remove(obj);
                        db.SaveChanges();
                    }
                }
                var x = db.GraphicObjects.Where(m => m.BoardId == aaa.BoardId);
                objs.AddRange(x.ToArray());
            }
            return Json(objs);
        }

        // Request na pridanie spravy do chatu
        [HttpPost]
        public JsonResult ChatAdd(ChatObject aaa)
        {
            var objs = new List<ChatObject>();
            aaa.Timestamp = DateTime.Now;
            using (var db = new ObjectDatabase())
            {
                db.ChatLog.Add(aaa);
                db.SaveChanges();
                var x = db.ChatLog.Where(m => m.BoardId == aaa.BoardId);
                objs.AddRange(x.ToArray());
            }
            return Json(objs);
        }

        // Request na obnovenie chatu
        [HttpPost]
        public JsonResult ChatRefresh(ChatObject aaa)
        {
            var my_lock = new object();
            var objs = new List<ChatObject>();
            using (var db = new ObjectDatabase())
            {
                var x = db.ChatLog.Where(m => m.BoardId == aaa.BoardId);
                objs.AddRange(x.ToArray());
            }
            return Json(objs);
        }

        /*public ActionResult ChatMessage()
        {
            var result = string.Empty;
            var sb = new StringBuilder();
            JavaScriptSerializer ser = new JavaScriptSerializer();
            var serializedObject = ser.Serialize(new { message = "chat" });
            sb.AppendFormat("data: {0}\n\n", serializedObject);
            System.Diagnostics.Debug.WriteLine("in chat");
            return Content(sb.ToString(), "text/event-stream");
        }

        public ActionResult BoardMessage()
        {
            var result = string.Empty;
            var sb = new StringBuilder();
            JavaScriptSerializer ser = new JavaScriptSerializer();
            var serializedObject = ser.Serialize(new { message = "board" });
            sb.AppendFormat("data: {0}\n\n", serializedObject);
            System.Diagnostics.Debug.WriteLine("in board");
            return Content(sb.ToString(), "text/event-stream");
        }*/
    }
}
