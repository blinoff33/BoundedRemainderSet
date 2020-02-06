using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;

namespace BoundedRemainderSet.Entities
{
	public class BRSetItems
	{
		public List<BRSetItem> Items { get; set; }

		public BRSetItems(List<BRSetItem> items)
		{
			this.Items = items;
		}
	}
}
