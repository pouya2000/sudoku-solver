function rlpuzz(level) {
    createCookie("rload",1,90);
	if (level!=6) location.href=".";
	else location.href="expert.php";
}

function savepuzz(spuzzno) {
    createCookie("test","none")
	if (readCookie("test")) {
     createCookie("slevel",clevel,60);
     createCookie("spno",cpno,60);
     if (dcmode=="c" && rcmode && cellselected>=0 && cellselected<81) resetrcclr(cellselected);
     var cellv="";
     for(var i=0;i<81;i++) {
	   var dumclr=truecolor(document.getElementById('cell'+i).style.backgroundColor);
       if (dumclr==yellow) cellv=cellv+"y";
       else if (dumclr==red) cellv=cellv+"r";
       else if (dumclr==blue) cellv=cellv+"b";
       else if (dumclr==green) cellv=cellv+"g";
       if (document.getElementById('c'+i).innerHTML!="") {
	     cellv=cellv+document.getElementById('c'+i).innerHTML;
	   }
       else {
	     cellv=cellv+"0";
       }
	   if (pmark[i]==true) cellv=cellv+"s";
       if (i<80) {
         cellv=cellv+",";
       }		
     }
     if (dcmode=="c" && rcmode && cellselected>=0 && cellselected<81) showrc(cellselected);
     createCookie("scellvalue",cellv,60);
     createCookie("stime",ms,60);
	 slevel=curlvl;
	 showsgame(spuzzno);
    }
	else {
	  alert("Can't save.  Your browser does not allow Cookies.");
	}
}

function savepuzzland(spuzzno) {
    createCookie("test","none")
	if (readCookie("test")) {
     createCookie("slevel",clevel,60);
     createCookie("spno",cpno,60);
     if (dcmode=="c" && rcmode && cellselected>=0 && cellselected<81) resetrcclr(cellselected);
     var cellv="";
     for(var i=0;i<81;i++) {
	   var dumclr=truecolor(document.getElementById('cell'+i).style.backgroundColor);
       if (dumclr==yellow) cellv=cellv+"y";
       else if (dumclr==red) cellv=cellv+"r";
       else if (dumclr==blue) cellv=cellv+"b";
       else if (dumclr==green) cellv=cellv+"g";
       if (document.getElementById('c'+i).innerHTML!="") {
	     cellv=cellv+document.getElementById('c'+i).innerHTML;
	   }
       else {
	     cellv=cellv+"0";
       }
	   if (pmark[i]==true) cellv=cellv+"s";
       if (i<80) {
         cellv=cellv+",";
       }		
     }
     if (dcmode=="c" && rcmode && cellselected>=0 && cellselected<81) showrc(cellselected);
     createCookie("scellvalue",cellv,60);
     createCookie("stime",ms,60);
	 slevel=curlvl;
	 showsgameland(spuzzno);
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
    document.getElementById("puzzsaved").style.display ="none"; 
    document.getElementById("savep").style.display ="block"; 
}	

function delpuzzland() {
    eraseCookie("slevel");
    eraseCookie("spno");
    eraseCookie("scellvalue");
    eraseCookie("stime");
    document.getElementById("savegame").style.display ="none"; 
}	

function showsgame(spuzzno) {
  document.getElementById("savedgnum").innerHTML=spuzzno; 
  if (document.getElementById("puzzsaved").style.display!="block") document.getElementById("puzzsaved").style.display="block";
  if (document.getElementById("savep").style.display!="none") document.getElementById("savep").style.display="none";
}  

function showsgameland(spuzzno) {
  document.getElementById("savedgnum").innerHTML=spuzzno; 
  if (document.getElementById("savegame").style.display=="none") document.getElementById("savegame").style.display="block";
}  

eraseCookie("rload");