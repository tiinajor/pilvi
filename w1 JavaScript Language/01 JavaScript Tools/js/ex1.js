A();

function C() {
	// write here console comment "OOPS!"
}

function E(f) {
	// write here console comment "E"
	f();
	var f = F;
}

var A = function() {
	// write here console comment "A"
	B();
};

var C;

function G() {
	// write here console comment "G"
	H();

	var H = function() {
		console.log("H");
		I();
	};
}

var D = d;

function d() {
	// write here console comment "D"
	E();
}

function I() {
	// write here console comment "I"
	J();
	J();
}

B = function() {
	// write here console comment "B"
	C();
};

var F = function() {
	console.log("F");
	G();
};

var rest = "KLMNOPQRSTUVWXYZ".split("");
for (var i=0; i<rest.length; i++) {
	(function(i){
		// define the current function
		window[rest[i]] = function() {
			console.log(rest[i]);
			if (i < (rest.length-1)) {
				// TODO: call the next function
			}
		};
	})(i);
}

var J = function() {
	J = function() {
		console.log("J");
		K();
	};
};

C = function() {
	console.log("C");
	D();
};

