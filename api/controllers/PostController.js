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

		var details = params.details;

		//Create details


		var sections = params.sections;

		//Create sections
		sections = JSON.parse(sections);
		
		for(i in sections){
			console.log(sections[i]);
			Section.create(sections[i], function(err, section){
				if(err) return next(err);
				console.log('Saving section');
				console.log(section);
			});
		}
		console.log('==========');
		/*for (var i = sections.length - 1; i >= 0; i--) {
			console.log(sections[i]);
			Section.create(sections[i], function(err, section){
				if(err) return next(err);
				//Created
				console.log('Section Created');
				console.log(section);
			});
		};*/

		console.log(params);

		console.log('section');
		console.log(sections);

		console.log("************************************");
		console.log('detail');
		console.log(details);

		console.log("************************************");

		/*Post.create(params, function(err, post){
			if(err) return next(err);

			res.status(201); //201 is created status code
			res.json(post); // Return post
		});
		*/
		res.status(201); //201 is created status code
		res.json({
			success: "Post created!"
		});
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

