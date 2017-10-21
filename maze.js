/*window.onload=function(){
  
  	document.getElementById("boundary1").addEventListener("mouseover",function(){
  		this.className="boundary youlose";
  		});
};*/
	
window.onload=function(){

	var border=document.querySelectorAll("div.boundary");
	
	for (var i=0; i<border.length;i++){
		border[i].onmouseover=function(){
				var border=document.querySelectorAll("div.boundary");
				for (var i=0; i<border.length-1;i++){
					border[i].className="boundary youlose";
					};
			};
		};
};
		