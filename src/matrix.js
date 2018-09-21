

var rotate_right = function (NxN) {
	NxN = NxN.reverse(); // reverse the rows

	for (var i = 0; i < NxN.length; ++i) {
		for (var j = 0; j < i; ++j) {

			var t = NxN[i][j];
			NxN[i][j] = NxN[j][i];
			NxN[j][i] = t;
		}
	}
	for (var row = 0; i < NxN.length; ++row) {
		console.log(NxN[row]);
	}
} 

var dot_product = function (NxN1, NxN2) {

	var result = [];

	for (var i1 = 0; i1 < NxN1.length; ++i1) {
		for (var j1 = 0; j1 < i1; ++j1) {

			for (var i2 = 0; i2 < NxN2.length; ++i2) {
				for (var j2 = 0; j2 < i2; ++j2) {

					result.push(NxN1[i2][j2] * NxN2[i1][j1]);
				}
			}
		}
	}

	return result;
}

console.log(dot_product([[1,2],[3,4]],[[1,2],[3,4]]))

