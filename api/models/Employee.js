/**
 * Employee.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name: {
      type: 'string',
      defaultsTo: '',
      required: 'true'
      },
    mobile: {
      type: 'string',
      defaultsTo: ''
      },
    email: {
      type: 'string'
      },
    city: {
      type: 'string'
      },
    
  },

};

