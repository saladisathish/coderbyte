function VowelCount(str) { 
   var count=0;
   for(i=0;i<str.length;i++){
 		if(str[i].search(/[aeiou]/gi)!=-1){
       		count++;
    	}
  	}
  return count; 
}