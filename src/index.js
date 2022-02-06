module.exports = function check(str, bracketsConfig) {
	let arr = [];
	let arrOpen = [];
	let arrClose = [];
	for (let i = 0; i < bracketsConfig.length; i++) {
		arrOpen.push(bracketsConfig[i][0]);
		if (bracketsConfig[i][0] != bracketsConfig[i][1])
			arrClose.push(bracketsConfig[i][1]);
		else
			arrClose.push('');
	}
	for (let i = 0; i < str.length; i++) {
		if (!arrOpen.includes(str[i]) && !arrClose.includes(str[i])) {
			return false;
		}	
		if (arr.length == 0 && arrClose.includes(str[i]))
			return false;
		if (arr.length > 0 && str[i] == arr[arr.length - 1] && arrClose[arrOpen.indexOf(arr[arr.length - 1])] == '') {			
			arr.pop();	
			continue;
		}
		if (arr.length > 0 && arrOpen.indexOf(arr[arr.length - 1]) == arrClose.indexOf(str[i]))
		{
			arr.pop();	
			continue;
		}	
		if (arrOpen.includes(str[i])) {
			arr.push(str[i]);
			continue;
		}	
		if (arrOpen.indexOf(arr[arr.length - 1]) == arrClose.indexOf(str[i]))
		{
			arr.pop();	
			continue;
		}
		if (arr.length > 0 && arrClose.includes(str[i]) && arrClose.indexOf(arr[arr.length - 1]) != arrClose.indexOf(str[i])) {
			return false;
		} 				
	}
	if (arr.length == 0)
		return true;
	else
		return false;
}
