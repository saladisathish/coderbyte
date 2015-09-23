function ArithGeo(arr) { 
  var art=0,geo=0;
  for(i=1;i<arr.length-1;i++){
  	if((arr[i]-arr[i-1])==(arr[i+1]-arr[i])) {
    	art++;
    }
    else if(arr[i]/arr[i-1]==arr[i+1]/arr[i]) {
     geo++; 
    }
  }
  if(geo==0 && art==arr.length-2){return "Arithmetic";}
  else if(geo==arr.length-2 && art==0){return "Geometric";}
  else return -1;         
}