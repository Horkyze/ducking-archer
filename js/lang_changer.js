function change_text(id, text)
{
	$("#"+id).html(text);
}

function parseXml(xml)
{
	console.log("Parsing XML document \""+ $.cookie('lang') + ".xml\"");
	$(xml).find("translation").each(function()
	{
	console.log("  Found element (changing text ... ) : " + $(this).attr('id'));
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

function update_cookie_and_change_lang(lang)
{
	if ($.cookie('lang') == lang)
	{
		console.log("Text already in language: "+ lang);
		return;
	}
	else
	{
		console.log("Updating cookie to: "+ lang);
		$.cookie('lang', lang)
		console.log("Changing current text to "+ $.cookie('lang'));
		change_lang_to($.cookie('lang'));
	}
}