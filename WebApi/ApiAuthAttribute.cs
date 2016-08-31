﻿using System;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Controllers;
using System.Web.Http.Filters;

namespace CyScada.Web.WebApi
{
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method, Inherited = true, AllowMultiple = true)]
    public class ApiAuthAttribute : ActionFilterAttribute
    {
        public override void OnActionExecuting(HttpActionContext actionContext)
        {
            try
            {
                if (actionContext.ActionDescriptor.GetCustomAttributes<AllowAnonymousAttribute>().Count > 0)   // 允许匿名访问
                {
                    base.OnActionExecuting(actionContext);
                    return;
                }
                //actionContext.Request.Headers.Authorization.Parameter
                var cookie = actionContext.Request.Headers.GetCookies();
                if (cookie == null || cookie.Count < 1)
                {
                    actionContext.Response = new HttpResponseMessage(HttpStatusCode.Forbidden);
                    return;
                }

                //FormsAuthenticationTicket ticket = null;

                //foreach (var perCookie in cookie[0].Cookies)
                //{
                //    if (perCookie.Name == FormsAuthentication.FormsCookieName)
                //    {
                //        ticket = FormsAuthentication.Decrypt(perCookie.Value);
                //        break;
                //    }
                //}

                //if (ticket == null)
                //{
                //    actionContext.Response = new HttpResponseMessage(HttpStatusCode.Forbidden);
                //    return;
                //}
               
                // TODO: 添加其它验证方法

                base.OnActionExecuting(actionContext);
            }
            catch
            {
                actionContext.Response = new HttpResponseMessage(HttpStatusCode.Forbidden);
            }
        }
    }
}