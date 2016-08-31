﻿using System.Web.Mvc;
using CyScada.Model;

namespace CyScada.Web.Controllers
{
    public class EmployeeController : Controller
    {
        //
        // GET: /EmployeeList/

        public ActionResult List()
        {
            var user = Session["User"] as UserModel;
            if (user == null)
            {
                return RedirectToAction("Index", "Login");
            }
            ViewBag.Id = user.Id;
            ViewBag.Name = user.Name;
            return PartialView();
        }

        //public ActionResult Index(int? userId)
        //{
        //    if (userId.HasValue)
        //    {
        //        ViewBag.Id = userId;
        //    }
        //    return View();
        //}



        ////
        //// GET: /EmployeeList/Details/5

        //public ActionResult Details(int id)
        //{
        //    return View();
        //}

        ////
        //// GET: /EmployeeList/Create

        //public ActionResult Create()
        //{
        //    return View();
        //}

        ////
        //// POST: /EmployeeList/Create

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
        //// GET: /EmployeeList/Edit/5

        //public ActionResult Edit(int id)
        //{
        //    return View();
        //}

        ////
        //// POST: /EmployeeList/Edit/5

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
        //// GET: /EmployeeList/Delete/5

        //public ActionResult Delete(int id)
        //{
        //    return View();
        //}

        ////
        //// POST: /EmployeeList/Delete/5

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
