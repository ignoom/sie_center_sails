/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	/*index: function(req, res){
		console.log('index action of user controller');
		return res.send(User.find());
	},*/

	// This should be accessed though a users path such as /user/:id/posts
	posts: function(req, res){
		//TODO return all posts that belongs to user
		return res.json({
			todo: "return all posts that belongs to user"
		});
	},

	delete: function(req, res){
		return res.json({
			todo: "delete user"
		});
	},

	update: function(req, res){
		return res.json({
			todo: "update user"
		});
	}

	
};

