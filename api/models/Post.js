/**
* Post.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  schema: true,

  attributes: {
    title: { type: 'text', unique: true },
    sections: {
      collection: 'section',
      via: 'post_id'
    }, //relationship with sections
    details: {
      collection: 'detail',
      via: 'post_id'
    }, //relationship with detail
    owner: {
      model: 'user'
    },
    footer: { type: 'text' },
    type: {type: 'string'}, //type of post
    create_date: {type: 'datetime'},
    last_update_date: {type: 'datetime'}
  }
};

