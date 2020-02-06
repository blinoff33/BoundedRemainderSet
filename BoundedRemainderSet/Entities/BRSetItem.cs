using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;

namespace BoundedRemainderSet.Entities
{
	public class BRSetItem
	{
		public Point Point { get; set; }
		public string Color { get; set; }

		public BRSetItem(Point point, string color)
		{
			this.Point = point;
			this.Color = color;
		}
	}
}
