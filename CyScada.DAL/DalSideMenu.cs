﻿using System;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;

namespace CyScada.DAL
{
    public class DalSideMenu
    {
        /// <summary>
        /// 获取侧边栏项目,返回集合内有两张表(SideMenu:一级目录,SubMenu:二级目录)
        /// </summary>
        /// <returns></returns>
        public DataSet QuerySideMenuSet()
        {
            var sql = string.Format(@"SELECT * FROM  ZQ_SideMenu WITH(NOLOCK) WHERE ParentId IS NULL order by sortnumber 
SELECT * FROM  ZQ_SideMenu WITH(NOLOCK) WHERE ParentId IS NOT NULL");

            var result = SqlHelper.ExecuteDataset(SqlHelper.GetConnection(), CommandType.Text, sql);
            if (result.Tables.Count != 2)
                return null;

            result.Tables[0].TableName = "SideMenu";
            result.Tables[1].TableName = "SubMenu";

            return result;
        }



        public DataTable QuerySideMenu(string menuType)
        {
            var sql = string.Format(@"SELECT * FROM  ZQ_SideMenu WITH(NOLOCK)");
            if (!string.IsNullOrEmpty(menuType))
            {
                sql += " WHERE MenuType in (" + menuType + ")";
            }

            var result = SqlHelper.ExecuteDataset(SqlHelper.GetConnection(), CommandType.Text, sql);
            if (result.Tables.Count == 0)
                return null;
            return result.Tables[0];
        }




        public string CreateSideMenu(Hashtable model)
        {
            var sql = string.Format(@"INSERT INTO  ZQ_SideMenu
        ( Name ,
          AuthorityCode ,
          Class ,
          Url ,
          ParentId ,
          SortNumber,
          SideMenuDesc,
          MenuType
        )
VALUES  ( '{0}' , -- Name - varchar(50)
          '{5}' , -- AuthorityCode - varchar(50)
          '{1}' , -- Class - varchar(500)
          '{2}' , -- Url - varchar(500)
          {3} , -- ParentId - int
          {4},  -- SortNumber - int
          '{6}',   --SideMenuDesc - varchar(500)
          {7}  -- MenuType - int
        )", model["Name"], model["Class"], model["Url"], model.ContainsKey("ParentId") ? model["ParentId"] : "NULL", model["SortNumber"], model["AuthorityCode"], model["SideMenuDesc"], model["MenuType"]);

            try
            {
                var result = SqlHelper.ExecuteNonQuery(SqlHelper.GetConnection(), CommandType.Text, sql);

                if (result <= 0)
                {
                    return "添加失败!";
                }
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
            return string.Empty;
        }

        public string ModifySideMenu(Hashtable model)
        {
            var sql = string.Format(@"UPDATE   ZQ_SideMenu
SET     Name = '{1}' ,
        AuthorityId = '{2}' ,
        AuthorityCode = '{7}' ,
        Class = '{3}' ,
        Url = '{4}' ,
        ParentId = {5},
        SortNumber={6},
        SideMenuDesc='{8}',
        MenuType='{9}'
WHERE   ID = {0}", model["Id"], model["Name"], model["AuthorityId"], model["Class"], model["Url"],
                model.ContainsKey("ParentId") ? model["ParentId"] : "NULL", model["SortNumber"], model["AuthorityCode"],
                model["SideMenuDesc"], model["MenuType"] == null ? "0" : model["MenuType"].ToString());

            try
            {

                var result = SqlHelper.ExecuteNonQuery(SqlHelper.GetConnection(), CommandType.Text, sql);
                if (result <= 0)
                {
                    return "修改失败!" + result;
                }
            }
            catch (Exception ex)
            {
                return ex.Message;
            }

            return string.Empty;
        }

        public void DeleteSideMenu(int id)
        {
            var sql = string.Format(@"DELETE FROM  ZQ_SideMenu WHERE ID={0}", id);
            SqlHelper.ExecuteNonQuery(SqlHelper.GetConnection(), CommandType.Text, sql);
        }
    }
}
