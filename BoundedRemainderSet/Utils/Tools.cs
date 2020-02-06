using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;

namespace BoundedRemainderSet.Utils
{
	public static class Tools
	{
		public static bool IsInPolygon(Point[] poly, Point point)
		{
			var coef = poly.Skip(1).Select((p, i) =>
											(point.Y - poly[i].Y) * (p.X - poly[i].X)
										  - (point.X - poly[i].X) * (p.Y - poly[i].Y))
									.ToList();

			if (coef.Any(p => p == 0))
				return true;

			for (int i = 1; i < coef.Count(); i++)
			{
				if (coef[i] * coef[i - 1] < 0)
					return false;
			}
			return true;
		}
	}
}
