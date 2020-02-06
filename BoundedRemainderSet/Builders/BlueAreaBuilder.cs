using BoundedRemainderSet.Entities;
using BoundedRemainderSet.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Windows;

namespace BoundedRemainderSet.Builders
{
	public class BlueAreaBuilder : AreaBuilder
	{
		public override void SetColor()
		{
			this.Area.Color = Constants.Color.BLUE;
		}

		public override void SetShiftingVector(Config configuration)
		{
			this.Area.ShiftingVector = new Vector(0, 1) - new Vector(1 + configuration.b.X - configuration.betta.X, 1 + configuration.b.Y - configuration.betta.Y);
		}

		public override void SetTops(Config configuration)
		{
			this.Area.Tops = new Point[] {
				new Point(1 + configuration.b.X, 1 + configuration.b.Y),
				new Point(1 + configuration.b.X, configuration.b.Y),
				new Point(1 + configuration.b.X - configuration.betta.X, configuration.b.Y - configuration.betta.Y),
				new Point(1 + configuration.b.X - configuration.betta.X, 1 + configuration.b.Y - configuration.betta.Y)
			};
		}

		public override void SetVolume(Config configuration)
		{
			this.Area.Volume = configuration.b.X * configuration.T;
		}
	}
}