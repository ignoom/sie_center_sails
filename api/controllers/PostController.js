/**
 * PostController
 *
 * @description :: Server-side logic for managing Posts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	create: function(req, res, next){
		console.log('create action PostController');
		var params = req.params.all();

		params.owner = req.user;
		console.log(params);
		console.log("************************************");

		var sections = JSON.parse(params.sections);

		var details = JSON.parse(params.details);
		Post.create(params).then(function(post){
			//Create mulitple sections
			for(i in sections){
				var section = sections[i];
				section.post_id = post.id;
				Section.create(section).then(function(section){
					Post.find().populate('sections');
					Section.find().populate('post_id');
				});
			}
			//Create multiple details
			for(i in details){
				var detail = details[i];
				detail.post_id = post.id;
				Detail.create(detail).then( function(detail){
					Post.find().populate('details');
					Detail.find().populate('post_id');
				});
			}

			return [post];
		}).spread( function(post){
			console.log(post);
			res.status(201);
			res.json(post); //return post
		}).fail(function(error){
				console.log(error);
		}); // End of then promise of Post Creation
	},

	destroy: function(req, res){
		return res.json({
			todo: "Not implemented"
		});
	},

	update: function(req, res){
		return res.json({
			todo: "Not implemented"
		});
	},

	index: function(req, res){
		Post.find( function(err, posts){
			if(err){
				return res.json(err);
			}
			return res.json(posts);
		});
	},

};
