using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Web.Http;
using BoundedRemainderSet.REST.V1.Controllers;
using System.Web.Http.Routing;
using System.Net.Http;
using System.Web.Http.Hosting;
using System.Net;
using System.Collections.Generic;
using System.Windows;
using System.Web.Http.Results;
using BoundedRemainderSet.Entities;

namespace BoundedRemainderSet.REST.Tests
{
	[TestClass]
	public class TestBRSetItemsController
	{
		[TestMethod]
		public void TestBRSetItems_ShouldReturnCorrectResult()
		{
			var valuesController = new BRSetItemsController();

			IHttpActionResult actionResult = valuesController.BRSetItems(10, 0.1, 0.1, GetTParam(), 0.1, 0.1);

			Assert.IsInstanceOfType(actionResult, typeof(OkNegotiatedContentResult<Result>));
		}

		[TestMethod]
		public void TestBRSetItems_ShouldReturnTNotValidResult()
		{
			var valuesController = new BRSetItemsController();

			IHttpActionResult actionResult = valuesController.BRSetItems(10, 0.1, 0.1, GetTParam(false), 0.1, 0.1);

			Assert.IsInstanceOfType(actionResult, typeof(BadRequestErrorMessageResult));
		}

		private double GetTParam(bool valid = true)
		{
			return valid ? Math.Abs(GetRandomNumberIncludeStart(-1, 0)) : GetRandomNumberIncludeStart(-1, 0);
		}

		private double GetRandomNumberIncludeStart(double minimum, double maximum)
		{
			Random random = new Random();
			return random.NextDouble() * (maximum - minimum) + minimum;
		}
	}
}
