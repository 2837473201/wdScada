using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Collections;
using CyScada.BLL;
using CyScada.Model;
using Newtonsoft.Json;

namespace CyScada.Web.WebApi.Controllers
{
    public class RealTime2Controller : ApiController
    {
        //点名配置(暂时写死)
        private string[] tagArray = new string[]{
            "OPC://127.0.0.1/KEPware.KEPServerEx.V4/WD.Device1.40001","OPC://127.0.0.1/KEPware.KEPServerEx.V4/WD.Device1.40002",
            "OPC://127.0.0.1/KEPware.KEPServerEx.V4/WD.Device1.40003","OPC://127.0.0.1/KEPware.KEPServerEx.V4/WD.Device1.40004",
            "OPC://127.0.0.1/KEPware.KEPServerEx.V4/WD.Device1.40005","OPC://127.0.0.1/KEPware.KEPServerEx.V4/WD.Device1.40006",
            "OPC://127.0.0.1/KEPware.KEPServerEx.V4/WD.Device1.40007","OPC://127.0.0.1/KEPware.KEPServerEx.V4/WD.Device1.40008",
            "OPC://127.0.0.1/KEPware.KEPServerEx.V4/WD.Device1.40009","OPC://127.0.0.1/KEPware.KEPServerEx.V4/WD.Device1.40010",
            "OPC://127.0.0.1/KEPware.KEPServerEx.V4/WD.Device1.40011","OPC://127.0.0.1/KEPware.KEPServerEx.V4/WD.Device1.40012",
            "OPC://127.0.0.1/KEPware.KEPServerEx.V4/WD.Device1.40013","OPC://127.0.0.1/KEPware.KEPServerEx.V4/WD.Device1.40014",
            "OPC://127.0.0.1/KEPware.KEPServerEx.V4/WD.Device1.40015","OPC://127.0.0.1/KEPware.KEPServerEx.V4/WD.Device1.40016",
            "OPC://127.0.0.1/KEPware.KEPServerEx.V4/WD.Device1.40017","OPC://127.0.0.1/KEPware.KEPServerEx.V4/WD.Device1.40018",
            "OPC://127.0.0.1/KEPware.KEPServerEx.V4/WD.Device1.40019","OPC://127.0.0.1/KEPware.KEPServerEx.V4/WD.Device1.40020",
            "OPC://127.0.0.1/KEPware.KEPServerEx.V4/WD.Device1.40021","OPC://127.0.0.1/KEPware.KEPServerEx.V4/WD.Device1.40022",
            "OPC://127.0.0.1/KEPware.KEPServerEx.V4/WD.Device1.40023","OPC://127.0.0.1/KEPware.KEPServerEx.V4/WD.Device1.40024",
            "OPC://127.0.0.1/KEPware.KEPServerEx.V4/WD.Device1.40025","OPC://127.0.0.1/KEPware.KEPServerEx.V4/WD.Device1.40026",
            "OPC://127.0.0.1/KEPware.KEPServerEx.V4/WD.Device1.40027","OPC://127.0.0.1/KEPware.KEPServerEx.V4/WD.Device1.40028",
            "OPC://127.0.0.1/KEPware.KEPServerEx.V4/WD.Device1.40029","OPC://127.0.0.1/KEPware.KEPServerEx.V4/WD.Device1.40030",
            "OPC://127.0.0.1/KEPware.KEPServerEx.V4/WD.Device1.40031","OPC://127.0.0.1/KEPware.KEPServerEx.V4/WD.Device1.40032",
            "OPC://127.0.0.1/KEPware.KEPServerEx.V4/WD.Device1.40033","OPC://127.0.0.1/KEPware.KEPServerEx.V4/WD.Device1.40034",
            "OPC://127.0.0.1/KEPware.KEPServerEx.V4/WD.Device1.40035","OPC://127.0.0.1/KEPware.KEPServerEx.V4/WD.Device1.40036",
            "OPC://127.0.0.1/KEPware.KEPServerEx.V4/WD.Device1.40037","OPC://127.0.0.1/KEPware.KEPServerEx.V4/WD.Device1.40038",
            "OPC://127.0.0.1/KEPware.KEPServerEx.V4/WD.Device1.40039","OPC://127.0.0.1/KEPware.KEPServerEx.V4/WD.Device1.40040",
            "OPC://127.0.0.1/KEPware.KEPServerEx.V4/WD.Device1.40041","OPC://127.0.0.1/KEPware.KEPServerEx.V4/WD.Device1.40042",
            "OPC://127.0.0.1/KEPware.KEPServerEx.V4/WD.Device1.40043","OPC://127.0.0.1/KEPware.KEPServerEx.V4/WD.Device1.40044",
            "OPC://127.0.0.1/KEPware.KEPServerEx.V4/WD.Device1.40045","OPC://127.0.0.1/KEPware.KEPServerEx.V4/WD.Device1.40046",
            "OPC://127.0.0.1/KEPware.KEPServerEx.V4/WD.Device1.40047","OPC://127.0.0.1/KEPware.KEPServerEx.V4/WD.Device1.40048",
            "OPC://127.0.0.1/KEPware.KEPServerEx.V4/WD.Device1.40049","OPC://127.0.0.1/KEPware.KEPServerEx.V4/WD.Device1.40050",
              "OPC://127.0.0.1/KEPware.KEPServerEx.V4/WD.Device1.40051","OPC://127.0.0.1/KEPware.KEPServerEx.V4/WD.Device1.40052",
            "OPC://127.0.0.1/KEPware.KEPServerEx.V4/WD.Device1.40053","OPC://127.0.0.1/KEPware.KEPServerEx.V4/WD.Device1.40054",
            "OPC://127.0.0.1/KEPware.KEPServerEx.V4/WD.Device1.40055","OPC://127.0.0.1/KEPware.KEPServerEx.V4/WD.Device1.40056",
            "OPC://127.0.0.1/KEPware.KEPServerEx.V4/WD.Device1.40057","OPC://127.0.0.1/KEPware.KEPServerEx.V4/WD.Device1.40058",
            "OPC://127.0.0.1/KEPware.KEPServerEx.V4/WD.Device1.40059","OPC://127.0.0.1/KEPware.KEPServerEx.V4/WD.Device1.40060",
        };

        
        private BllRealTimeDisplay _bllRealTimeDisplay = new BllRealTimeDisplay();
        public BllRealTimeDisplay BLLRealTimeDisplay
        {
            get { return _bllRealTimeDisplay; }
            set { _bllRealTimeDisplay = value; }
        }

        // GET api/realtime2
        public List<string> Get()
        {
            var result = new List<string>();
            foreach (var tagKey in tagArray)
            {
                if (OpcClient.OpcClient.ItemTable.ContainsKey(tagKey))
                    result.Add((OpcClient.OpcClient.ItemTable[tagKey] as TagItemModel).Value.ToString());
            }
            return result;
        }

        // GET api/realtime2/5
        public string Get(int id)
        {
            return "value";
        }



        //public Hashtable Get()
        //{
        //    return OpcClient.OpcClient.ItemTable;
        //}
        public Hashtable Get(string tagList)
        {
            var result = new Hashtable();
            var tagArray = JsonConvert.DeserializeObject<string[]>(tagList);
            foreach (var tagKey in tagArray)
            {
                result.Add(tagKey, OpcClient.OpcClient.ItemTable[tagKey]);
            }
            return result;
        }
        public void Post([FromBody] string[] values)
        {
            var index = int.Parse(values[0]);
            OpcClient.OpcClient.SetValue(tagArray[index], values[1]);
        }



    }
}
