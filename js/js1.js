$(function(){
$("#but1").click(function(){
		$(":checkbox").prop("checked","checked");
	})
	//全不选
	$("#but2").click(function(){
		$(":checkbox").prop("checked","");
	})
	//反选
	$("#but3").click(function(){
		var arr=$(":checkbox");
		for(var i=0;i<arr.length;i++){
			arr[i].checked=!arr[i].checked;
		}
	})
	
})