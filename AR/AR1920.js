function LanguageToggle()
{
	if(document.getElementById("langtoggle") != null)
	{
		var newurl = window.location.toString();
		
		if((document.getElementById("langtoggle").lang == "fr") || (document.getElementById("langtoggle").lang == "Fr"))
		{
			newurl = window.location.toString().replace(/\/eng\//i, '\/fra\/');
			document.getElementById("langtoggle").href = newurl;
		}
		else if((document.getElementById("langtoggle").lang == "en") || (document.getElementById("langtoggle").lang == "En"))
		{
			newurl = window.location.toString().replace(/\/fra\//i, '\/eng\/');
			document.getElementById("langtoggle").href = newurl;
		}
	}
}

function FeedbackButton()
{
	if(/\/fra\//.test(window.location.toString()))
	{
		document.getElementById("feedback").innerHTML = "Signaler un problème sur cette page";
		document.getElementById("feedback").setAttribute("href", ('mailto:webmaster@osfi-bsif.gc.ca?Subject=Signaler%20un%20problème%20sur%20cette%20page%20:%20' + document.getElementsByTagName("TITLE")[0].text + '&Body=' + window.location.href));
	}
 	else // eng
	{
		document.getElementById("feedback").innerHTML = "Report a problem on this page";
		document.getElementById("feedback").setAttribute("href", ('mailto:webmaster@osfi-bsif.gc.ca?Subject=Report%20a%20problem%20on%20this%20page:%20' + document.getElementsByTagName("TITLE")[0].text + '&Body=' + window.location.href));
	}
}