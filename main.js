function unpronouncable(length) {
	var twoLetters = ['aa','ae','ag','ai','ar','ao','as','aw','ay','ba','da','de','ed','ef','eh','ei','em','en','er','et','ex','fa','fe','fu','gi','go','hm','ho','so','id','ie','jo','ka','ki','ku','lo','mi','mm','mu','na','ne','nu','od','oe','oi','om','op','os','os','oy','pe','pi','qi','re','se','ta','ti','ut','wo','xi','xi','ya','yu','za','zo','co','my','qu','ge','ro','ra','xa','wa'];
	var threeLetters = ['thm','css','dvd','buh','bad','rue','cun','pub','puk','pul'];

	var letters = "abcdefghijklmnopqrstuvwxyz";
	var string = "";
	for (var i = 0; i < length; i += 1) {
		string += letters[Math.floor(Math.random() * letters.length)];
	}

	function generateHelper(string, array) {
		for (var i = 0; i < string.length; i += 1) {
			var test = string.slice(i,i+2);
			for (var j = 0; j < array.length; j += 1) {
				if (array[j] === test) {
					console.log('Contains pronouncable syllable');
					return unpronouncable(length);
				}
			}
		}
	}

	generateHelper(string,twoLetters);
	generateHelper(string,threeLetters);

	return string;
}

console.log(unpronouncable(8));