function rlpuzz(level) {
    createCookie("rload",1,90);
	if (level!=6) location.href=".";
	else location.href="expert.php";
}
	
function savepuzz() {
    createCookie("test","none")
	if (readCookie("test")) {
     createCookie("slevel",clevel,60);
     createCookie("spno",cpno,60);
     var cellv="";
     for(var i=0;i<81;i++) {
       if (truecolor(document.getElementById('cell'+i).style.backgroundColor)==yellow) cellv=cellv+"y";
       else if (truecolor(document.getElementById('cell'+i).style.backgroundColor)==red) cellv=cellv+"r";
       else if (truecolor(document.getElementById('cell'+i).style.backgroundColor)==blue) cellv=cellv+"b";
       else if (truecolor(document.getElementById('cell'+i).style.backgroundColor)==green) cellv=cellv+"g";
       if (document.getElementById('c'+i).value!="") {
	     cellv=cellv+document.getElementById('c'+i).value;
	   }
       else {
	     cellv=cellv+"0";
       }
	   if (document.getElementById('c'+i).className==smcls) cellv=cellv+"s";
       if (i<80) {
         cellv=cellv+",";
       }		
     }
     createCookie("scellvalue",cellv,60);
     createCookie("stime",ms,60);
	 showsgame();
    }
	else {
	  alert("Can't save.  Your browser does not allow Cookies.");
	}
}

function delpuzz() {
    eraseCookie("slevel");
    eraseCookie("spno");
    eraseCookie("scellvalue");
    eraseCookie("stime");
    document.getElementById("savegame1").innerHTML =""; 
    document.getElementById("savegame2").innerHTML =""; 
}	

eraseCookie("rload");