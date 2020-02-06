using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;

namespace BoundedRemainderSet.Entities
{
	public class Area
	{
		//цвет
		public string Color { get; set; }
		//координаты вершин
		public Point[] Tops { get; set; }
		//вектор перекладывания
		public Vector ShiftingVector { get; set; }
		//площадь
		public double Volume { get; set; }
	}
}
