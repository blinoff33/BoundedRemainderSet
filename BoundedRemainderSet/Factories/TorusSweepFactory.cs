using BoundedRemainderSet.Builders;
using BoundedRemainderSet.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BoundedRemainderSet.Factories
{
	public class TorusSweepFactory
	{
		public static TorusSweep MakeTorusSweep(Config config)
		{
			AreaFactory creator = new AreaFactory();
			AreaBuilder builder = new RedAreaBuilder();
			var redArea = creator.Create(builder, config);
			builder = new GreenAreaBuilder();
			var greenArea = creator.Create(builder, config);
			builder = new BlueAreaBuilder();
			var blueArea = creator.Create(builder, config);

			return new TorusSweep(redArea, greenArea, blueArea, config);
		}
	}
}