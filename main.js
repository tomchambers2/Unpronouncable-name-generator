function unpronouncable(length) {
	var twoLetters = ['aa','ae','ag','ai','ar','ao','as','aw','ay','ba','da','de','ed','ef','eh','ei','em','en','er','et','ex','fa','fe','fu','gi','go','hm','ho','so','id','ie','jo','ka','ki','ku','lo','mi','mm','mu','na','ne','nu','od','oe','oi','om','op','os','os','oy','pe','pi','qi','re','se','ta','ti','ut','wo','xi','xi','ya','yu','za','zo','co','my','qu','ge','ro','ra','xa','wa'];
	var threeLetters = ['thm','css','dvd','buh','bad','rue','cun','pub','puk','pul'];

	var letters = "abcdefghijklmnopqrstuvwxyz";
	var string = "";
	for (var i = 0; i < length; i += 1) {
		string += letters[Math.floor(Math.random() * letters.length)];
	}

	function generate() {
		for (var j = 0; j < string.length; j += 1) {
			var test = string.slice(j,j+2);
			for (var k = 0; k < twoLetters.length; k += 1) {
				if (twoLetters[k] === test) {
					console.log('Has two letter syllable');
					return unpronouncable(length);
				}
			}
		}
		for (var j = 0; j < string.length; j += 1) {
			var test = string.slice(j,j+3);
			for (var k = 0; k < twoLetters.length; k += 1) {
				if (threeLetters[k] === test) {
					console.log('Has three letter syllable');
					return unpronouncable(length);
				}
			}			
		}

		return string;
	}
	return generate();
}

console.log(unpronouncable(8));