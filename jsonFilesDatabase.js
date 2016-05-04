var jsonfile = require('jsonfile');
// var FILENAME = 'tmp/users.json';
// var obj1 = {name: 'moutaz', username: 'mo3taz123', password:'123', email:'mo3taz@gmail.com', score:'0'};
// var obj2 = {name: 'omar', username: 'omar123', password:'123', email:'omar@gmail.com', score:'0'};

function readFile(fileName){
	jsonfile.readFile(fileName, function(err, arr) {
  		console.log(arr);
	});
}

function writeFile(fileName, obj){
	if (obj.constructor !== Array){
		obj = [obj];
	}
	jsonfile.writeFile(fileName, obj, function (err) {
		if(err !== null){
  			console.error(err);
  		}
	});
}

function appendUser(fileName, newObject){
	jsonfile.readFile(fileName, function(err, arr){
		arr.push(newObject);
		writeFile(fileName, arr);
	});
}

function getScore(fileName, username){
	jsonfile.readFile(fileName, function(err, arr){
		for(var user in arr){
			if(arr[user].username == username){
				score = arr[user].score;
				// use score here
				console.log(score);
			}
		}
	});
}

// synchronous function
function getScoreSync(fileName, username){
	arr = jsonfile.readFileSync(fileName);
	var score = null;
	for(var user in arr){
		if(arr[user].username == username){
			score = arr[user].score;
		}
	}
	return score;
}

function updateScore(fileName, username, newScore){
	jsonfile.readFile(fileName, function(err, arr){
		for(var user in arr){
			if(arr[user].username == username){
				arr[user].score = newScore;
				writeFile(fileName, arr);
			}
		}
	});
}

function updatePassword(fileName, username, newPassword){
	jsonfile.readFile(fileName, function(err, arr){
		for(var user in arr){
			if(arr[user].username == username){
				arr[user].password = newPassword;
				writeFile(fileName, arr);
			}
		}
	});
}

function getPassword(fileName, username){
	jsonfile.readFile(fileName, function(err, arr){
		for(var user in arr){
			if(arr[user].username == username){
				password = arr[user].password;
				// use password here
				console.log(password);
				break;
			}
		}
	});
}

// synchronous function
function getPasswordSync(fileName, username){
	arr = jsonfile.readFileSync(fileName);
	var password = null;
	for(var user in arr){
		if(arr[user].username == username){
			password = arr[user].password;
			break;
		}
	}
	return password;
}

function logInCheck(fileName, username, password){
	jsonfile.readFile(fileName, function(err, arr){
		var found = false;
		for(var user in arr){
			if(arr[user].username == username && arr[user].password == password){
				// user exists, do what you want
				console.log("Correct user, let him in " + arr[user].username + " " + arr[user].password);
				found = true;
				break;
			}
		}
		if(! found){
			// user doesn't exist, May be he has forgetten his password
			console.log("You are not in my database " + username + " " + password);
		}
	});
}

function signUpCheck(fileName, username, email){
	jsonfile.readFile(fileName, function(err, arr){
		var found = false;
		for(var user in arr){
			if(arr[user].username == username && arr[user].email == email){
				// user exists, do what you want
				console.log("You already have an account, go log in sir " + arr[user].username + " " + arr[user].email);
				found = true;
				break;
			}
		}
		if(! found){
			// user doesn't exist
			console.log("User is not in the database, append his data in the database " + username + " " + email);
		}
	});
}

// writeFile(FILENAME, obj1);
// readFile(FILENAME);
// appendUser(FILENAME, obj2);
// readFile(FILENAME);

// updateScore(FILENAME, "mo3taz123", 10);
// console.log(getScoreSync(FILENAME, "mo3taz123"));
// getScore(FILENAME, "mo3taz123");

// updatePassword(FILENAME, "omar123", "123456");
// console.log(getPasswordSync(FILENAME, "omar123"));
// getPassword(FILENAME, "omar123");

// logInCheck(FILENAME, "mo3taz123", "123");
// logInCheck(FILENAME, "omar123", "123456");
// logInCheck(FILENAME, "omar1231", "123456");
// logInCheck(FILENAME, "omar123", "1234561");

// signUpCheck(FILENAME, "mo3taz123", "mo3taz@gmail.com");
// signUpCheck(FILENAME, "omar123", "omar@gmail.com");
// signUpCheck(FILENAME, "omar1231", "omar@gmail.com");
// signUpCheck(FILENAME, "omar123", "omar123@gmail.com");