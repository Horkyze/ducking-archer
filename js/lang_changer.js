function change_text(id, text)
{
	$("#"+id).html(text);
}

function parseXml(xml)
{

  $(xml).find("translation").each(function()
  {
	console.log($(this).attr('id'));
	change_text($(this).attr('id'), $(this).text());
  });

}

function getXML(lang)
{
  $.ajax({
    type: "GET",
    url: "langs/" + lang + ".xml",
    dataType: "xml",
    success: parseXml
  });
}

function change_lang_to(lang)
{
	getXML(lang);
}

/*$(document).ready(function(){
  $.ajax({
    type: "GET",
    url: "langs/langs.xml",
    dataType: "xml",
    success: parseXml
  });
}); */