function ArrayAdditionI(arr) { 
  var num;
  var lrg=arr.sort(function(a,b){return a-b}).pop();
	function recursive(target,array){
    	if(array.length===0) {
        	return target===0;
        }
         var num=array[0];
         array=array.slice(1);
         return recursive(target,array)||recursive(target-num,array);
    }
  return recursive(lrg,arr);     
}