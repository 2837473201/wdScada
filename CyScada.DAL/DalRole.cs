﻿using System;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;

namespace CyScada.DAL
{
    public class DalRole
    {
        public DataTable GetRoleList()
        {
            return GetRoleList(new Hashtable());
        }


        public DataTable GetRoleList(Hashtable filterModel)
        {
            var sqlBuilder = new StringBuilder(@"SELECT * FROM  ZQ_Roles WITH(NOLOCK) where 1=1 ");
            foreach (DictionaryEntry pair in filterModel)
            {
                //如果是字符串类型，但是是空值，则忽略
                if (pair.Value is string && string.IsNullOrEmpty(pair.Value.ToString())) { continue; }

                var value = pair.Value is string
                    ? "'" + pair.Value + "'"
                    : pair.Value is DateTime
                        ? ((DateTime)pair.Value).ToString("yyyy-MM-dd HH:mm:ss")
                        : pair.Value == null
                            ? string.Empty
                            : pair.Value.ToString();

                sqlBuilder.AppendFormat(@" AND {0}={1}", pair.Key.ToString(), value);
            }

            var result = SqlHelper.ExecuteDataset(SqlHelper.GetConnection(), CommandType.Text, sqlBuilder.ToString());
            return result == null || result.Tables.Count == 0 ? null : result.Tables[0];
        }



        public string CreateRole(Hashtable model)
        {
            var sql = string.Format(@"INSERT INTO  ZQ_Roles
        ( Name, Description, Authority,AuthorityCode )
VALUES  ( '{0}', -- Name - varchar(50)
          '{1}', -- Description - varchar(500)
          0,  -- Authority - bigint
          ''  -- AuthorityCode - bigint
          )", model["Name"], model["Description"]);

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

        public string ModifyRole(Hashtable model)
        {
            var sql = string.Format(@"UPDATE   ZQ_Roles
SET     Name = '{1}' ,
        Description = '{2}' ,
        Authority = '{3}',
        AuthorityCode = '{4}'
WHERE   ID = {0}", model["Id"], model["Name"], model["Description"],
                model.ContainsKey("Authority") ? model["Authority"] : 0,
                string.IsNullOrEmpty(model["AuthorityCode"] == null ? string.Empty : model["AuthorityCode"].ToString())
                    ? string.Empty
                    : model["AuthorityCode"].ToString());
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

        public void DeleteRole(int id)
        {
            var sql = string.Format(@"DELETE FROM  ZQ_Roles WHERE ID={0}", id);
            SqlHelper.ExecuteNonQuery(SqlHelper.GetConnection(), CommandType.Text, sql);
        }
    }
}
