using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;

namespace BoundedRemainderSet.Entities
{
	public class TorusSweep
	{
		public Area RedArea { get; set; }
		public Area GreenArea { get; set; }
		public Area BlueArea { get; set; }
		public Config Config { get; set; }

		public TorusSweep(Area redArea, Area greenArea, Area blueArea, Config config)
		{
			this.RedArea = redArea;
			this.GreenArea = greenArea;
			this.BlueArea = blueArea;
			this.Config = config;
		}

	}
}
