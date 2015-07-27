/**
* Section.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	subtitle: {type: 'text'},
	text: {type: 'text'},
	icon: {type: 'string'},
	bullets: {type: 'array'}, // array of bullets txt
	img: {type: 'string'},
	post_id: {
		model: 'post'
	}
  }
};

