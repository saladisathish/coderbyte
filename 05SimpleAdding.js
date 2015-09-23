function SimpleAdding(num) { 
	return num<=0?num:num+SimpleAdding(num-1); 
}