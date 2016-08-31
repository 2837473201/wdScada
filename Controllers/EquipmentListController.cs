﻿using System.Web.Mvc;
using CyScada.Model;

namespace CyScada.Web.Controllers
{
    public class EquipmentListController : Controller
    {
        //
        // GET: /EquipmentList/

        public ActionResult Index()
        {
            var user = Session["User"] as UserModel;
            if (user == null)
            {
                return RedirectToAction("Index", "Login");
            }
            ViewBag.Id = user.Id;
            ViewBag.Name = user.Name;
            return View();
        }

        ////
        //// GET: /EquipmentList/Details/5

        //public ActionResult Details(int id)
        //{
        //    return View();
        //}

        ////
        //// GET: /EquipmentList/Create

        //public ActionResult Create()
        //{
        //    return View();
        //}

        ////
        //// POST: /EquipmentList/Create

        //[HttpPost]
        //public ActionResult Create(FormCollection collection)
        //{
        //    try
        //    {
        //        // TODO: Add insert logic here

        //        return RedirectToAction("Index");
        //    }
        //    catch
        //    {
        //        return View();
        //    }
        //}

        ////
        //// GET: /EquipmentList/Edit/5

        //public ActionResult Edit(int id)
        //{
        //    return View();
        //}

        ////
        //// POST: /EquipmentList/Edit/5

        //[HttpPost]
        //public ActionResult Edit(int id, FormCollection collection)
        //{
        //    try
        //    {
        //        // TODO: Add update logic here

        //        return RedirectToAction("Index");
        //    }
        //    catch
        //    {
        //        return View();
        //    }
        //}

        ////
        //// GET: /EquipmentList/Delete/5

        //public ActionResult Delete(int id)
        //{
        //    return View();
        //}

        ////
        //// POST: /EquipmentList/Delete/5

        //[HttpPost]
        //public ActionResult Delete(int id, FormCollection collection)
        //{
        //    try
        //    {
        //        // TODO: Add delete logic here

        //        return RedirectToAction("Index");
        //    }
        //    catch
        //    {
        //        return View();
        //    }
        //}
    }
}
