jQuery(document).ready(function(){jQuery(function(){jQuery(this).bind("contextmenu",function(e){e.preventDefault(),alert("Sorry but right click is disabled on this site")})})}),document.onkeydown=function(e){if(123===event.keyCode)return!1;if(e.ctrlKey&&e.shiftKey&&e.keyCode==="I".charCodeAt(0))return!1;if(e.ctrlKey&&e.shiftKey&&e.keyCode==="J".charCodeAt(0))return!1;if(e.ctrlKey&&e.keyCode==="U".charCodeAt(0))return!1;function t(e){const t=event,n=t.button;if(2===n||3===n)return!1}document.onmousedown=t,document.onmouseup=t};