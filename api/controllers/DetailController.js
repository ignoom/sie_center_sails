/**
 * DetailController
 *
 * @description :: Server-side logic for managing Details
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	index: function(req, res){
		Detail.find(function(err, details){
			if(err) {
				return res.json(err);
			}
			return res.json(details);
		});
		
	}
	
};

