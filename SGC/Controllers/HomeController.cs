using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SGC.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Login(tbl_Usuarios objId_Usuario)
        {
            if (ModelState.IsValid)
            {
                using (SGCEntities db = new SGCEntities())
                {
                    var obj = db.tbl_Usuarios.Where(a => a.Id_Usuario.Equals(objId_Usuario) && a.Contraseña.Equals(objId_Usuario.Contraseña)).FirstOrDefault();
                    if (obj != null)
                    {
                        Session["Id_Usuario"] = obj.Id_Usuario.ToString();
                        Session["Nom_Docente"] = obj.Nom_Docente.ToString();
                        return RedirectToAction("About");
                    }

                }
            }
            return View(objId_Usuario);
        }
        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}