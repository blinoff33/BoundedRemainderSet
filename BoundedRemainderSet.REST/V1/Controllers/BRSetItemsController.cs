using BoundedRemainderSet.Factories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Windows;

namespace BoundedRemainderSet.REST.V1.Controllers
{
	[RoutePrefix("v1")]
	public class BRSetItemsController : ApiController
    {
		[HttpGet]
		[Route("BRSetItems")]
		public IHttpActionResult BRSetItems(int size, double b1, double b2, double t, double p1, double p2)
        {
			try
			{
				Vector b = new Vector(b1, b2);
				Point p = new Point(p1, p2);

				var result = ResultFactory.MakeResult(b, t, p, size);
			
				return Ok(result);
			}
			catch (Exception ex)
			{
				return BadRequest(ex.Message);
			}
		}

  }
}
