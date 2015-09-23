function LetterCountI(str) { 
var ans="";
  var count=0,num=0;
  var arr=str.split(" ");
  for(i=0;i<arr.length;i++){
  	var word=arr[i].split("").sort().join("");
    var letter=word[0];
    count=1;
	for(j=1;j<word.length;j++){
    	if(word[j]==letter) {       
        	count++;
          if(count>num){
            num=count;
            ans=str.split(" ")[i];
          }
        }
      else{
        letter=word[j];
        cournt=1;
      }
    }
  } 
  return (num>1)?ans:"-1";         
}