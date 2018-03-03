module.exports = function getZerosCount(number, base) {

  var num = base;
  

  var ind = findQuantity(num);
  	
 
  var i = 1, res = null;

  while(Math.pow(ind,i) < number){
  	res += Math.floor(number / Math.pow(ind,i));
  	i++;
  }

  var repInd = 0;
  while(num % ind == 0){
  	num = num / ind;
  	repInd++;
  }

  return Math.floor(res / repInd);

}

function findQuantity(a){
	let quantity = [];
	
	for(let i = 2; i <= a; i++){
	while(a % i == 0) {
  		quantity.push(i);
  		a = a / i;
  	}
  	
    }
	
	let length = quantity.length;    
  	return quantity[length-1];
 }