function Palindrome(str) { 
	str=str.split(" ").join("");  
	var newStr=str.split("").reverse().join("");  
	if(newStr===str) return true;
	else return false;
}