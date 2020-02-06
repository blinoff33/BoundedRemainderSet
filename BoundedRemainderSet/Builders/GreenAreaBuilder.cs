using BoundedRemainderSet.Entities;
using BoundedRemainderSet.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Windows;

namespace BoundedRemainderSet.Builders
{
	public class GreenAreaBuilder : AreaBuilder
	{
		public override void SetColor()
		{
			this.Area.Color = Constants.Color.GREEN;
		}

		public override void SetShiftingVector(Config configuration)
		{
			this.Area.ShiftingVector = new Vector(1, 0) - new Vector(1 + configuration.b.X - configuration.betta.X, 1 + configuration.b.Y - configuration.betta.Y);
		}

		public override void SetTops(Config configuration)
		{
			this.Area.Tops = new Point[] {
				new Point(configuration.b.X - configuration.betta.X, 1 + configuration.b.Y - configuration.betta.Y),
				new Point(configuration.b.X, 1 + configuration.b.Y),
				new Point(1 + configuration.b.X, 1 + configuration.b.Y),
				new Point(1 + configuration.b.X - configuration.betta.X, 1 + configuration.b.Y - configuration.betta.Y)
			};
		}

		public override void SetVolume(Config configuration)
		{
			this.Area.Volume = configuration.b.Y * configuration.T;
		}
	}
}