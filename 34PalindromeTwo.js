function PalindromeTwo(str) { 
  var nwStr=[],anStr=[];
  str=str.split("");
  for(i=0;i<str.length;i++){
	   if(str[i].search(/[a-z]/gi)!=-1){
    	  nwStr.push(str[i]);
        anStr.push(str[i]);
      }
  }
  nwStr=nwStr.reverse().join("").toLowerCase();
  anStr=anStr.join("").toLowerCase();
  return nwStr===anStr; 
}