using BoundedRemainderSet.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Windows;

namespace BoundedRemainderSet.Factories
{
	public class ResultFactory
	{
		public static Result MakeResult(Vector b, double t, Point p, int size)
		{
			Config config = ConfigFactory.MakeConfig(b, t, p, size);

			TorusSweep torus = TorusSweepFactory.MakeTorusSweep(config);

			BRSetItems brs = BRSetItemsFactory.MakeBRSetItems(torus);

			return new Result(config, torus, brs);
		}
	}
}