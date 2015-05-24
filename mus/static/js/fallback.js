jQuery(document).ready(function(){
var noMeterSupport = function(){
                 return(document.createElement('meter').max === undefined);
}

 if (noMeterSupport()) {
 	console.log('no');
var fakeMeter, fill, label, labelText, max, meter, value;
meter = $('#pledge_goal');
value = meter.attr('value');
max = meter.attr("max");
labelText = "$" + value;
fakeMeter = $("<div></div>");
fakeMeter.addClass("meter");
label = $("<span>" + labelText + "</span>");
label.addClass("Label");
fill = $("<div></div>");
fill.addClass("fill");
fill.css("width",(value / max * 100) + "%");
fill.append("<div styLe='clear:both;'><br></div>");
fakeMeter.append(fill);
fakeMeter.append(label);
meter.replaceWith(fakeMeter);
}else{

	console.log('yes');
}

$('.popup').on('click',function(){

	var link = this;
	var href = link.getAttribute("href");
	var height = link.getAttribute("data-height");
	var width = link.getAttribute("data-width");

	window.open(href, "popup", "height=" + height + ",width = " + width +"");
	return false;
});
});