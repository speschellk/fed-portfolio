$(function(){

	$("#projects").hide();
	$("#about").hide();
	$("#contact").hide();

	$("a").click(function(){
		if ($(this).attr("href")==="#projects"){
			$("#projects").show();
			$("#about").hide();
			$("#contact").hide();
		} else if ($(this).attr("href")==="#about"){
			$("#about").show();
			$("#projects").hide();
			$("#contact").hide();
		} else if ($(this).attr("href")==="#contact"){
			$("#contact").show();
			$("#projects").hide();
			$("#about").hide();
		} else if ($(this).attr("href")==="#home"){
			$("#projects").hide();
			$("#about").hide();
			$("#contact").hide();
		}
	});
	

});
