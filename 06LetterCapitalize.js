function LetterCapitalize(str) { 
  result="";
  for(i=0;i<str.length;i++){
  	if(i==0){
      str[0]=" "?" ":str[0].toUpperCase();
  	  result=str[0].toUpperCase();
    }
    else if(str[i-1]==" "){
      result+=str[i].toUpperCase();
    }
    else {
      result+=str[i];
    }
  }
return result;        
}