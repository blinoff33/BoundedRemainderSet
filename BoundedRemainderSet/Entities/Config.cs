using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;

namespace BoundedRemainderSet.Entities
{
	public class Config
	{
		//ортонормированный	базис
		public static readonly Vector e1 = new Vector(1, 0);
		public static readonly Vector e2 = new Vector(0, 1);

		//преобразованный базис
		public Vector L1 { get; set; }
		public Vector L2 { get; set; }

		//начальная точка
		public Point StartPoint { get; set; }

		//количество точек
		public int PointsCount { get; set; }

		public Vector betta { get; set; }
		public Vector b { get; set; }
		private double t { get; set; }

		public double T
		{
			get
			{
				return t;
			}

			set
			{
				if (!(value > 0 && value < 1))
					throw new ArgumentException("Параметр t должен быть больше 0 и меньше 1");
				t = value;
			}
		}

		public Config(Vector b, double t, Vector betta, Vector L1, Vector L2, Point startPoint, int pointsCount)
		{
			this.b = b;
			this.T = t;
			this.betta = betta;
			this.L1 = L1;
			this.L2 = L2;
			this.StartPoint = startPoint;
			this.PointsCount = pointsCount;
		}
	}
}
