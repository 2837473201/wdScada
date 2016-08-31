﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CyScada.Model
{
    public class AuthorityModel
    {
        public int? Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        //public int? AuthorityId { get; set; }
        public string AuthorityCode { get; set; }
        public string AuthorityType { get; set; }
    }
}
