var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var cookie = require('cookie');

/* GET home page. */
router.get('/', function(req, res, next) {	
	if (req.cookies.email){
		res.clearCookie('email');
	}
  	res.render('index', { title: 'SimBiss' });
});

module.exports = router;

var users = [];
var posts = [];
var i = 1;
router.get('/5', function(req, res){
	if (i==1){
		i++;
		res.redirect('/5');
	}
	var MongoClient = mongodb.MongoClient;
	var url = 'mongodb://localhost:27017/website'; // Define where the MongoDB server is

	if (req.param('email') != null )
		var email1 = req.param('email');
	else
		var email1 = req.cookies.email;
	var emailc = req.cookies.email;

	console.log(emailc);

	MongoClient.connect(url, function (err, db) {
	if (err) {
		console.log('Unable to connect to the Server', err);
	} else { //connected
		console.log('Connection established to', url);
		
		// Get the documents collection
		db.collection("posts", function(err, collection){
			collection.find().toArray(function(err, result) {
				if (err) {
					res.send(err);
				} else if (result.length) {
					for (i=0; i<result.length; i++) {
						posts[i] = result[i];
					}
				}
			});
		});
		db.collection("users", function(err, collection){
			collection.find().toArray(function(err, result) {
				if (err) {
					res.send(err);
				} else if (result.length) {
					for (i=0; i<result.length; i++) {
						users[i] = result[i];
					}
				}
			});
		});

		//sends vars to profile page
		res.render('profile', {
			title: 'SimBiss',
			"email1": email1,
			"emailc": emailc,
        	"posts": posts,
        	"users": users	
      	});
    }
  	});
});


router.get('/delpost', function(req, res){
	var postid = req.param('post');
	postid= postid.toString();
	var MongoClient = mongodb.MongoClient;
	var url = 'mongodb://localhost:27017/website';

	MongoClient.connect(url, function(err, db){ // Connect to the server
		if (err) {
			console.log('Unable to connect to the Server:', err);
		} else {
			console.log('Connected to Server');
		}

		var collection = db.collection('posts'); // Get the documents collection

		var newid = new mongodb.ObjectId(postid);

	    collection.remove({"_id": newid});

	    res.redirect('/5');

		db.close();

	}); 
});


var users = [];
var posts = [];
var i = 1;
router.get('/4', function(req, res){
	var emailc = req.cookies.email;
	var MongoClient = mongodb.MongoClient;
	var url = 'mongodb://localhost:27017/website'; // Define where the MongoDB server is

	MongoClient.connect(url, function (err, db) {
	if (err) {
		console.log('Unable to connect to the Server', err);
	} else { //connected
		console.log('Connection established to', url);
		
		// Get the documents collection
		db.collection("posts", function(err, collection){
			collection.find().toArray(function(err, result) {
				if (err) {
					res.send(err);
				} else if (result.length) {
					for (i=0; i<result.length; i++) {
						posts[i] = result[i];
					}
				}
			});
		});
		db.collection("users", function(err, collection){
			collection.find().toArray(function(err, result) {
				if (err) {
					res.send(err);
				} else if (result.length) {
					for (i=0; i<result.length; i++) {
						users[i] = result[i];
					}
				}
			});
		});
		if (i==1){
			i++;
			res.redirect('/4');
		}
		res.render('notif', {
			title: 'SimBiss',
			"emailc": emailc,
        	"posts": posts,
        	"users": users	
      	});
    }
  	});
});


var users = [];
var posts = [];
router.get('/2', function(req, res){
	var MongoClient = mongodb.MongoClient;
	var url = 'mongodb://localhost:27017/website'; // Define where the MongoDB server is

	MongoClient.connect(url, function (err, db) {
	if (err) {
		console.log('Unable to connect to the Server', err);
	} else { //connected
		console.log('Connection established to', url);
		
		// Get the documents collection
		db.collection("posts", function(err, collection){
			collection.find().toArray(function(err, result) {
				if (err) {
					res.send(err);
				} else if (result.length) {
					for (i=0; i<result.length; i++) {
						posts[i] = result[i];
					}
				}
			});
		});
		db.collection("users", function(err, collection){
			collection.find().toArray(function(err, result) {
				if (err) {
					res.send(err);
				} else if (result.length) {
					for (i=0; i<result.length; i++) {
						users[i] = result[i];
					}
				}
			});
		});
		res.render('homefeed', {
			title: 'SimBiss',
        	"posts": posts,
        	"users": users	
      	});
    }
  	});
});

var users = [];
var posts = [];
router.get('/1', function(req, res){
	var MongoClient = mongodb.MongoClient;
	var url = 'mongodb://localhost:27017/website'; // Define where the MongoDB server is

	MongoClient.connect(url, function (err, db) {
	if (err) {
		console.log('Unable to connect to the Server', err);
	} else { //connected
		console.log('Connection established to', url);
		
		// Get the documents collection
		db.collection("posts", function(err, collection){
			collection.find().toArray(function(err, result) {
				if (err) {
					res.send(err);
				} else if (result.length) {
					for (i=0; i<result.length; i++) {
						posts[i] = result[i];
					}
				}
			});
		});
		db.collection("users", function(err, collection){
			collection.find().toArray(function(err, result) {
				if (err) {
					res.send(err);
				} else if (result.length) {
					for (i=0; i<result.length; i++) {
						users[i] = result[i];
					}
				}
			});
		});
		res.render('search', {
			title: 'SimBiss',
        	"posts": posts,
        	"users": users	
      	});
    }
  	});
});


router.get('/fpsw', function(req, res){
	if (req.cookies.email){
		res.clearCookie('email');
	}

	var MongoClient = mongodb.MongoClient;
	var url = 'mongodb://localhost:27017/website'; // Define where the MongoDB server is

	MongoClient.connect(url, function (err, db) {
	if (err) {
		console.log('Unable to connect to the Server', err);
	} else { //connected
		console.log('Connection established to', url);
		
		// Get the documents collection
		var collection = db.collection('users');
		collection.find({}).toArray(function (err, result) {// Find all users

	if (err) {
		res.send(err);
	} else if (result.length) {
		console.log(collection);
		res.render('fpsw', { title: 'SimBiss', 
		// Pass the returned database documents to Jade
		"usrlist" : result
	});
	} else {
		res.send('No documents found');
	}

//	if (req.cookie.email) {
//		res.redirect('/homefeed');
//	}
//	else {
//		res.render('/fpsw');
//	}

	db.close(); //Close connection
	}); }
	});
});


router.post('/addusr', function(req, res){
	var MongoClient = mongodb.MongoClient;
	var url = 'mongodb://localhost:27017/website';
	MongoClient.connect(url, function(err, db){ // Connect to the server
		if (err) {
			console.log('Unable to connect to the Server:', err);
		} else {
			console.log('Connected to Server');
		}

	var collection = db.collection('users'); // Get the documents collection
	var usr1 = {fname: req.body.fname, lname: req.body.lname, email: req.body.email, gender: req.body.gender, psw: req.body.psw, secureq: req.body.secureq, securea: req.body.securea};
	
	collection.insert([usr1], function (err, result){ //Insert the data
		if (err) {
			console.log(err);
		} else {
			res.cookie('email', req.body.email, {expire :new Date()+9999});
			res.render('psetup', {title: 'SimBiss', "email1": req.body.email}); //redirect to setting up profile, reneder sends info
		}
		db.close();
		});

	}
); });


router.post('/3', function(req, res){
	var MongoClient = mongodb.MongoClient;
	var url = 'mongodb://localhost:27017/website';
	MongoClient.connect(url, function(err, db){ // Connect to the server
		if (err) {
			console.log('Unable to connect to the Server:', err);
		} else {
			console.log('Connected to Server');
	var collection = db.collection('posts'); // Get the documents collection
	var post1 = {title: req.body.title, lookingfor: req.body.lookingfor, pnum: req.body.pnum, payment: req.body.payment, loc: req.body.loc, description: req.body.description, email: req.cookies.email};
	
	collection.insert([post1], function (err, result){ //Insert the data
		if (err) {
			console.log(err);
		} else {
			res.redirect('/2'); //redirect to home
		}

//		if (req.cookie.email) {
//		res.redirect('/createposting');
//	}
//	else {
//		res.render('/login');
//	}

	db.close();
		});

	}
}); });


//connect to login page
router.get('/login', function(req, res) {
	res.render('login', {title:'SimBiss'});
});

router.post('/login', function(req, res){
	if (req.cookies.email){
		res.clearCookie('email');
	}

	var MongoClient = mongodb.MongoClient;
	var url = 'mongodb://localhost:27017/website';
	MongoClient.connect(url, function(err, db){
		if (err) {
			console.log('Unable to connect to the Server:', err);
		}
		else {
			console.log('Connected to Server');

			// Get the documents collection
		  var collection = db.collection('users');
		  var formData = {email: req.body.email, psw: req.body.psw};

		  // Find all users
		  collection.find({"email": formData.email, "psw": formData.psw}).toArray(function (err, result) {
		    if (err)
		    {
		      res.send(err);
		    }

		    else if (result.length)
		    {
		      console.log('yes result ' + formData.email + result);
		      currentUser = formData.email;
		      if (req.cookies.email == undefined )
		      	res.cookie('email', req.body.email, {expire :new Date()+9999});
		      else
		      	console.log("cookie exists");
		      res.redirect("/2");
		    }

		    else
		    {
		      console.log('no result');
		      console.log(formData.email);
		      console.log(formData.password);
		      res.render('login', {title: 'SimBiss'});
		      
		    }
		    //Close connection
		    db.close();

		});
	}
});
});

router.get('/listcookies', function(req, res){
	console.log("Cookies : ", req.cookies);
	res.send('Look in console for cookies');
});

router.get('/deletecookie', function(req, res){
  res.clearCookie('email');
  res.send('email Cookie Deleted');
});

router.get('/2', function(req, res){
	res.render('homefeed', {title:'SimBiss'});
});

router.post('/2', function(req, res){
	res.render('homefeed', {title:'SimBiss'});
});

router.get('/3', function(req, res){
	res.render('createposting', {title:'SimBiss'});
});

router.post('/3', function(req, res){
	res.render('createposting', {title:'SimBiss'});
});

router.get('/signup', function(req, res){
	res.render('signup', {title:'SimBiss'});
});

router.post('/signup', function(req, res){
	res.render('signup', {title:'SimBiss'});
});



router.post('/5', function(req, res){
	res.render('profile', {title:'SimBiss'});
});

router.get('/about', function(req, res){
	res.render('about', {title:'SimBiss'});
});

router.get('/contact', function(req, res){
	res.render('contact', {title:'SimBiss'});
});


router.get('/psetup', function(req, res){
	res.render('psetup', {title:'SimBiss'});
});


router.post('/biosetup', function(req, res){
	var MongoClient = mongodb.MongoClient;
	var url = 'mongodb://localhost:27017/website';
	MongoClient.connect(url, function(err, db){ // Connect to the server
		if (err) {
			console.log('Unable to connect to the Server:', err);
		} else {
			console.log('Connected to Server');
		}

		var collection = db.collection('users'); // Get the documents collection

	    collection.update({"email": req.cookies.email}, {$set:{'bio': req.body.bio}});
	    res.redirect('/5');

		db.close();

	}); 
});


router.post('/addreview', function(req, res){
	var email = req.param('email');
	var MongoClient = mongodb.MongoClient;
	var url = 'mongodb://localhost:27017/website';

	MongoClient.connect(url, function(err, db){ // Connect to the server
		if (err) {
			console.log('Unable to connect to the Server:', err);
		} else {
			console.log('Connected to Server');
		}

		var collection = db.collection('users'); // Get the documents collection

	    collection.update({"email": email}, {$push:{'reviews': {'rate': req.body.rate, 'comment': req.body.comment, 'writer': req.cookies.email}}});
	    res.redirect('/5');

		db.close();

	}); 
});

router.get('/rate', function(req, res){
	var email = req.param('email');
	var MongoClient = mongodb.MongoClient;
	var url = 'mongodb://localhost:27017/website'; // Define where the MongoDB server is

	MongoClient.connect(url, function (err, db) {
	if (err) {
		console.log('Unable to connect to the Server', err);
	} else { //connected
		console.log('Connection established to', url);
		
		// Get the documents collection
		var collection = db.collection('users');
		collection.find({}).toArray(function (err, result) {// Find all users, 2 find queries

			if (err) {
				res.send(err);
			} else if (result.length) {
				res.render('rateform', {title: 'SimBiss',  
				// Pass the returned database documents to Jade
				"email": email,
				"users" : result
			});
			} else {
				res.send('No documents found');
			}

			db.close(); //Close connection
			}); }
	});
});

router.get('/like', function(req, res){
	var postid = req.param('post');
	postid= postid.toString();
	var MongoClient = mongodb.MongoClient;
	var url = 'mongodb://localhost:27017/website';

	MongoClient.connect(url, function(err, db){ // Connect to the server
		if (err) {
			console.log('Unable to connect to the Server:', err);
		} else {
			console.log('Connected to Server');
		}

		var collection = db.collection('posts'); // Get the documents collection

		var newid = new mongodb.ObjectId(postid);

	    collection.update({"_id": newid}, {$push:{'likes': req.cookies.email}});

	    res.redirect('/2');

		db.close();

	}); 
});

router.get('/deny', function(req, res){
	var email = req.param('email');
	email= email.toString();
	var MongoClient = mongodb.MongoClient;
	var url = 'mongodb://localhost:27017/website';

	MongoClient.connect(url, function(err, db){ // Connect to the server
		if (err) {
			console.log('Unable to connect to the Server:', err);
		} else {
			console.log('Connected to Server');
		}

		var collection = db.collection('posts'); // Get the documents collection

		collection.update({email: req.cookies.email}, {$pull: {"likes": email}});

	    res.redirect('/4');

		db.close();

	});
}); 

router.get('/accept', function(req, res){
	var email = req.param('email');
	email= email.toString();
	var MongoClient = mongodb.MongoClient;
	var url = 'mongodb://localhost:27017/website';

	MongoClient.connect(url, function(err, db){ // Connect to the server
		if (err) {
			console.log('Unable to connect to the Server:', err);
		} else {
			console.log('Connected to Server');
		}

		var collection = db.collection('posts'); // Get the documents collection
		collection.find({}).toArray(function (err, result) {// Find all users, 2 find queries
			if (err) {
				res.send(err);
			} else if (result != null) {
				var posts = result;
				var c8 = 0;
				while (c8 < posts.length){
					if (posts[c8].email == req.cookies.email){
						var pnum = parseInt(posts[c8].pnum);
						pnum--;
						var c5 = 0;
						var already = 0;
						if(posts[c8].accepted != null){
							while (c5 < posts[c8].accepted.length){
								if(posts[c8].accepted[c5] == email ){
									already = 1;
								}
								c5++;
							}
						}
						if (already == 0){
							collection.update({"email": req.cookies.email}, {$push: {"accepted": email}});
							collection.update({"email": req.cookies.email}, {$set: {"pnum": pnum}});
						}
						if (pnum == 0){
							collection.remove({"pnum": 0});
						}
					}
					c8++;
				}

			    
			}

			collection.update({"email": req.cookies.email}, {$pull: {"likes": email}});
			res.redirect('/4');

			db.close();
		});
	});
}); 


router.get('/editp', function(req, res){
	res.render('psetup', {
		title: 'SimBiss',
		"email1": req.cookies.email
	})
});



router.get('/searchsubmit', function(req, res){
	var usersnew = [];
	var postsnew = [];
	var searchw = req.query.searchword;
	var MongoClient = mongodb.MongoClient;
	var url = 'mongodb://localhost:27017/website'; // Define where the MongoDB server is

	MongoClient.connect(url, function (err, db) {
	if (err) {
		console.log('Unable to connect to the Server', err);
	} else { //connected
		console.log('Connection established to', url);
		
		// Get the documents collection
		db.collection("posts", function(err, collection){
			collection.find( {$or: [ {"description": searchw}, {"lookingfor": searchw} ] } ).toArray(function(err, result) {
				if (err) {
					res.send(err);
				} else if (result.length) {
					res.render('search', {
						title: 'SimBiss',
						"posts": result
					});
				}
			});
		});
		db.collection("users", function(err, collection){
			collection.find( {$or: [ {"fname": searchw} , {"lname": searchw} ] } ).toArray(function(err, result) {
				if (err) {
					res.send(err);
				} else if (result.length) {
					res.render('search', {
						title: 'SimBiss',
			        	"users": result	
			      	});
				}

			});
		});
    }
  	});
});





router.get('/fpsw', function(req, res){
	res.render('fpsw', {title: 'SimBiss'});
});




module.exports = router;

