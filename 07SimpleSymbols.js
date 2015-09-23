function SimpleSymbols(str) { 
  for(i=0;i<str.length;i++){
  	if(str[i].search(/[A-Z]/gi)!=-1){
      if(i==str.length-1) return false;
	    if(i==0) return false;
		  else if(str[i-1]!="+" || str[i+1]!="+"){
       		return false;
      }
    }
  }
  return true;  
}