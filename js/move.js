//图片随鼠标移动js脚本
document.addEventListener('mousemove',function(e){
		//鼠标移动触发事件
		var x=e.pageX;
		var y=e.pageY;
		var pic=document.querySelector('img');
		pic.style.left=x-65+'px';
		pic.style.top=y-60+'px';
	})