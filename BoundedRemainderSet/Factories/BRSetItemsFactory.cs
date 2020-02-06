using BoundedRemainderSet.Entities;
using BoundedRemainderSet.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Windows;

namespace BoundedRemainderSet.Factories
{
	public class BRSetItemsFactory
	{
		public static BRSetItems MakeBRSetItems(TorusSweep torusSweep)
		{
			List<BRSetItem> items = new List<BRSetItem>();
			Point p = torusSweep.Config.StartPoint;

			for (int i = 0; i < torusSweep.Config.PointsCount; i++)
			{
				if (TryGetAreaShifting(torusSweep.RedArea, ref items, ref p)) continue;
				if (TryGetAreaShifting(torusSweep.GreenArea, ref items, ref p)) continue;
				if (TryGetAreaShifting(torusSweep.BlueArea, ref items, ref p)) continue;
				throw new ArgumentException("Точка находится за пределами торической развертки");
			}

			return new BRSetItems(items);
		}

		private static bool TryGetAreaShifting(Area area, ref List<BRSetItem> rez, ref Point p)
		{
			if (Tools.IsInPolygon(area.Tops, p))
			{
				rez.Add(new BRSetItem(p, area.Color));
				p += area.ShiftingVector;
				return true;
			}
			return false;
		}
	}
}