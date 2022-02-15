window.onload = function(){
 var oMsg = document.getElementById("msg");
 var oBtn = document.getElementById("btn");
 var oMsg_c = document.getElementById("msg_c");
 var oUl = document.createElement("ul");
 oMsg_c.appendChild(oUl);
 oBtn.onclick = function(){
  var sVal = oMsg.value;
  var oli = document.createElement("li");
  oli.innerHTML = sVal + " <span>删除</span>";
  var oli1 = oUl.getElementsByTagName("li");
  if(oli1.length>0){
   oUl.insertBefore(oli,oli1[0]);
  }else{
   oUl.appendChild(oli);
  }
  oMsg.value='';
   var oSpan = document.getElementsByTagName("span");
   for(var i=0; i<oSpan.length; i++){
    oSpan[i].onclick = function(){
     oUl.removeChild(this.parentNode);
    }
   }
 }
} 