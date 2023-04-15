// complete the given function

function palindrome(str){
	let i=0,j=str.length-1;
	while(i<j){
		let a=str.charAt(i).toLowerCase();
		let b=str.charAt(j).toLowerCase();
		if(a!=b) return false;
		else{
		i++;
		j--;
		}
	}
	return true;
  
}
module.exports = palindrome
