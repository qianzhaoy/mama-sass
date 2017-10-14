var $ = require("jquery");
var item = require("../../static/html/order_item.html");
$.template("order-item", item);

$(function () {
	$.get("/static/JSON/order.json").done(function (res) {
		$.tmpl("order-item", res, {
			myValue: "somevalue",
			timeFormat: function (timeS) {
				return timeS ? "付款时间：" + new Date(timeS * 1000).Format("yyyy-MM-dd hh:mm:ss") : ""
			}
		}).appendTo("#order_list");
	})
})
