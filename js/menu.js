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
}
			
$(document).ready(function(){
		$.get("onas.html", function(data){
			$("#content").html(data);
		});
					
	$(function() {
		choose("x8");
	});
});