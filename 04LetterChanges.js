function LetterChanges(str) { 
var newStr=str.split("");
  for(var i=0;i<newStr.length;i++)
  {  
    if(newStr[i].search(/[a-z]/gi)!=-1)
       {
 		   if(newStr[i].search(/[z]/gi)!=-1){
    		  newStr[i]=String.fromCharCode(newStr[i].charCodeAt()-26);
			 }
       newStr[i]=String.fromCharCode(newStr[i].charCodeAt()+1);
       if(newStr[i].search(/[aeiou]/g)!=-1){
    		  newStr[i]=String.fromCharCode(newStr[i].charCodeAt()-32);            
       }
	  }
  }
	str= newStr.join("");
   return str;       
}  