function TimeConvert(num) {   
	var hr=0, mn=0;
  	hr=Math.floor(num/60);
  	mn=num%60;
  	return hr+":"+mn;
}