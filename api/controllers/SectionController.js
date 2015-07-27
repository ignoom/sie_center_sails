/**
 * SectionController
 *
 * @description :: Server-side logic for managing Sections
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	index: function(req, res){
		Section.find(function(err, sections){
			if(err) {
				return res.json(err);
			}
			return res.json(sections);
		});
	}
	
};

