using BoundedRemainderSet.Entities;
using BoundedRemainderSet.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Windows;

namespace BoundedRemainderSet.Builders
{
	public class RedAreaBuilder : AreaBuilder
	{
		public override void SetColor()
		{
			this.Area.Color = Constants.Color.RED;
		}

		public override void SetShiftingVector(Config configuration)
		{
			this.Area.ShiftingVector = configuration.betta;
		}

		public override void SetTops(Config configuration)
		{
			this.Area.Tops = new Point[] {
				new Point(0, 0),
				new Point(0, 1),
				new Point(configuration.b.X - configuration.betta.X, 1 + configuration.b.Y - configuration.betta.Y),
				new Point(1 + configuration.b.X - configuration.betta.X, 1 + configuration.b.Y - configuration.betta.Y),
				new Point(1 + configuration.b.X - configuration.betta.X, configuration.b.Y - configuration.betta.Y),
				new Point(1, 0)
			};
		}

		public override void SetVolume(Config configuration)
		{
			this.Area.Volume = 1 + configuration.b.X + configuration.b.Y - configuration.betta.X - configuration.betta.Y;
		}
	}
}