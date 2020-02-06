using BoundedRemainderSet.Builders;
using BoundedRemainderSet.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BoundedRemainderSet.Factories
{
	public class AreaFactory
	{
		public Area Create(AreaBuilder builder, Config configuration)
		{
			builder.CreateArea();
			builder.SetColor();
			builder.SetTops(configuration);
			builder.SetVolume(configuration);
			builder.SetShiftingVector(configuration);
			return builder.Area;
		}
	}
}