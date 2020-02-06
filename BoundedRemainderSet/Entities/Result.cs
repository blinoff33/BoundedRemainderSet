using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BoundedRemainderSet.Entities
{
	public class Result
	{
		public Config Config { get; set; }
		public TorusSweep Torus { get; set; }
		public BRSetItems BR { get; set; }
		public Result(Config config, TorusSweep torus, BRSetItems br) {
			this.Config = config;
			this.Torus = torus;
			this.BR = br;
		}
	}
}