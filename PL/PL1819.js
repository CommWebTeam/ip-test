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

function Pagination()
{
	if(document.getElementsByClassName("arrow--left") != null)
	{
		var leftArrow = document.getElementsByClassName("arrow--left");
		if(leftArrow.length > 0)
		{
			var leftLocation = window.location.toString();
			var leftPageNum = leftLocation.match(/-(\d*)\.html/i);
			
			leftPageNum[1] = Number(leftPageNum[1]) - 1;
			
			if(leftPageNum[1] < 1)
			{
				leftPageNum[1] = 1;
			}
			
			leftLocation = leftLocation.replace(/-(\d*)\.html/i, '-' + leftPageNum[1] + '\.html');
			leftArrow[0].href = leftLocation;
		}
	}
	
	if(document.getElementsByClassName("arrow--right") != null)
	{
		var rightArrow = document.getElementsByClassName("arrow--right");
		if(rightArrow.length > 0)
		{
			var rightLocation = window.location.toString();
			var rightPageNum = rightLocation.match(/-(\d*)\.html/i);
			
			rightPageNum[1] = Number(rightPageNum[1]) + 1;
			
			if(rightPageNum[1] > 11)
			{
				rightPageNum[1] = 1;
			}
			
			rightLocation = rightLocation.replace(/-(\d*)\.html/i, '-' + rightPageNum[1] + '\.html');
			rightArrow[0].href = rightLocation;
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