var myword = "";
var errorCount = 0;
$(function(){
	$(btn1).click(function(){
		myword = $(word).val();
		$(word).val("").attr("disabled", true);
		addStarsToWord(myword.length);
		$(this).hide();
		$(answer).show();
	});
	$(btn2).click(function(){
		var symbol = $(symb).val();
		$(symb).val("").focus();
		var positions = [];
		for(i=0;i<myword.length; i++){
			if(myword[i]==symbol){
				positions.push(i);
			}
			
		}
		
		if(positions.length>0){
			replaceStarsOn(symbol, positions);
			if(myword == $(word).val()){
				alert('you win');
			}
		}else{
			errorCount++;
			//console.log(errorCount);
			$("#img").css('background-position', '0 -'+(errorCount*200)+'px');
			if(errorCount==6){
				alert('game over, its '+myword);
				window.location.reload();
			}
		}
		
	});
});

function addStarsToWord(len){
	var str = "";
	for(i=0; i < len; i++){
		str+="*";
	}
	$(word).val(str);
}

function replaceStarsOn(s,pos){
	var smb = $(word).val();
	for(i=0; i < pos.length; i++){
		smb = smb.substring(0,pos[i])+s+smb.substring(pos[i]+1);
		
	}
	$(word).val(smb);
	
	
	
}