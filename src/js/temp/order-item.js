var $ = require("jquery");
var item = require("../../static/html/order_item.html");
var data = require("../../static/JSON/order")
$.template("order-item", item);

$(function () {
	$.tmpl("order-item", data, {
		myValue: "somevalue",
		timeFormat: function (timeS) {
			return timeS ? "付款时间：" + new Date(timeS * 1000).Format("yyyy-MM-dd hh:mm:ss") : ""
		}
	}).appendTo("#order_list");
})
