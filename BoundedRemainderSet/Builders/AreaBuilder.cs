using BoundedRemainderSet.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Windows;

namespace BoundedRemainderSet.Builders
{
	public abstract class AreaBuilder
	{
		public Area Area { get; private set; }
		public void CreateArea()
		{
			Area = new Area();
		}
		//назначить цвет
		abstract public void SetColor();
		//получение координат вершин
		abstract public void SetTops(Config configuration);
		//получение площади
		abstract public void SetVolume(Config configuration);
		//получение вектора перекладывания
		abstract public void SetShiftingVector(Config configuration);
	}
}