var arrayAtticus = ["Atticus", "2405", "47000", 3];//4% bonus + 5% bonus
var arrayJem = ["Jem", "62347", "63500", 4];//6% bonus
var arrayBoo = ["Boo", "11435", "54000", 3];//4% bonus
var arrayScout = ["Scout", "6243", "74750", 5];//10% bonus + 5% bonus - 1% bonus
//goal array is name, percentage of STI, adjusted annual income, employees total bonus


var baseSTI = function (array) {
	var STI = 0;
	switch(array[3]) {
		case 2:
		STI = 0.00;
		break;
		case 3:
		STI = 0.04;
		break;
		case 4: 
		STI = 0.06;
		break;
		case 5:
		STI = 0.10;
		break;
	}
	return STI;
};
var modifiedSTI = function (array, STI) {
	if (array[1].length == 4) {
		STI += 0.05;
	}
	if (array[2] > 65000) {
		STI -= 0.01;
	}
	if (STI > 0.13) {
		STI = 0.13;
	}
return STI;
};

function newArray (array){
	var newArray = [ ];
	newArray.push(array[0]);
	var bonuspercentage = (modifiedSTI(array, baseSTI(array)));
	newArray.push(bonuspercentage * 100);
	array[2] = parseInt(array[2]);
	var salary = array[2] + bonuspercentage * array[2];
	salary = salary * 100;
	salary = Math.round(salary);
	salary = salary / 100;
	newArray.push(salary);
	newArray.push(Math.round(bonuspercentage * array[2]));
	return newArray;
}

var newArrayScout = newArray(arrayScout);
var newArrayJem = newArray(arrayJem);
var newArrayAtticus = newArray(arrayAtticus);
var newArrayBoo = newArray(arrayBoo);

console.log(modifiedSTI(arrayScout,baseSTI(arrayScout)));
console.log(newArrayBoo);
console.log(newArrayAtticus);
console.log(newArrayJem);
console.log(newArrayScout);


