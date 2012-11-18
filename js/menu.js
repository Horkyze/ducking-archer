function choose(s)
{
	if (s == "w200i")
	{
		$("#x8").hide();
		$("#x8_choose").css("font-weight","normal");
					
		$("#w200i").show();
		$("#w200i_choose").css("font-weight","bold");
					
	}
	else
	{
		$("#w200i").hide();
		$("#w200i_choose").css("font-weight","normal");
					
		$("#x8").show();
		$("#x8_choose").css("font-weight","bold");
	}
}
			
function otvor(s)
{
	$('#content').fadeOut('slow', function() {
		$.get(s+".html", function(data){					
				$("#content").html(data);
				$("#content").fadeIn('slow');
		});
	});
	
	change_lang_to($.cookie('lang'));
}
			
$(document).ready(function(){

	// init menu
	$(function() {
		choose("x8");
	});
	
	// load default page
	$.get("onas.html", function(data){
		$("#content").html(data);
	});
	
	// set default lang
	if ( $.cookie('lang') == null )
	{
		console.log("Setting cookie...");
		$.cookie('lang', 'svk');
	}
	
	//change text to default lang
	console.log("Changing language to "+ $.cookie('lang'));
	change_lang_to($.cookie('lang'));
});