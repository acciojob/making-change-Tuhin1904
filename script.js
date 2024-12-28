const makeChange = (c) => {
  // your name here
	const change  = {
		q:0,
		d:0,
		n:0,
		p:0
	}
	const coinValue = {
		q:25,
		d:10,
		n:5,
		p:1
	}

	for(let coin in coinValue){
		// console.log("Coin:",coin)
		change[coin] = Math.floor(c/coinValue[coin]);
		c = c%coinValue[coin]
	}

	return change;
};
// makeChange(134)
// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
