function fnTab(cont,cont1,cont2,cont3,fu){
		var oBox=document.getElementById(cont);
		var oBox1=document.getElementById(cont1)
		var aIi=oBox.getElementsByTagName(cont2);
		var aDiv=oBox1.getElementsByTagName(cont3);
		
		for(var i=0;i<aIi.length;i++){
			aIi[i].index=i;
			aIi[i][fu]=function(){
				for(var i=0;i<aIi.length;i++){
					aIi[i].className='';
					aDiv[i].className='item';
				}
				this.className='active';
				aDiv[this.index].className='show';	
			};	
		}
}