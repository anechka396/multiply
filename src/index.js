module.exports = function multiply(num1, num2) {
  var result = Array.from({length: num1.length + num2.length}, (_, id) => (0));
	var i1 = 0, i2 = 0;
	for(var i = num1.length -1; i >= 0; i--){
		var carry = 0;
		var n1 = parseInt(num1[i]);
		i2 = 0;
		for(var j = num2.length -1; j >= 0; j--){
			var n2 = parseInt(num2[j]);
			var sum = n1*n2 + result[i1+i2] + carry;
			
			carry = Math.trunc(sum / 10);
			result[i1+i2] = sum % 10;
			
			i2++;
		}
		
		if(carry > 0) {
			result[i1+i2] += carry;
		}
		i1++;
	}
	
	return result.reverse().join('').replace(/^0+/, '');
}
