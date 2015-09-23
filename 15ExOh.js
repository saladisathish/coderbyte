function ExOh(str) {  
  var x=0,o=0;
  str=str.split("");
  for(i=0;i<str.length;i++){
  	str[i]=='x'?x++:o++;
  }
  if(x==o){return true}
  else return false;
}