function openpopup(mylink, windowname) { if (! window.focus)return true; var href; if (typeof(mylink) == 'string') href=mylink; else href=mylink.href; window.open(href, windowname, 'width=800,height=500,left=300,top=100,toolbar=no,location=no,directories=no,menubar=no,scrollbars=no,resizable=no,'); return false; } 

function closepopup() {
  window.close();
}


