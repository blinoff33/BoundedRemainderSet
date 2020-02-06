using BoundedRemainderSet.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Windows;

namespace BoundedRemainderSet.Factories
{
	public class ConfigFactory
	{
		public static Config MakeConfig(Vector b, double t, Point startPoint, int pointsCount)
		{
			Vector betta = b * t;
			Vector L1 = Config.e1 + b;
			Vector L2 = Config.e2 + b;

			return new Config(b, t, betta, L1, L2, startPoint, pointsCount);
		}
	}
}