/**
 * EmployeeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    create: function (req, res) {
        let data;
          // to convert category name's first letter capital
        data = { name: req.body.name.charAt(0).toUpperCase() + req.body.name.slice(1) }
        myemployeedb.create(data).fetch().exec(function (err, employee) {
          if (err) return (err);
          return res.json(employee);
        })
    },

    show: function (req, res) {
        myemployeedb.find().exec(function (err, employee) {
          return res.json(employee);
        });
      },

    edit: function (req, res) {
        let query;
        let data;
        query = { "id": req.param('id') }
        // to convert category to first letter capital, rest of them are small letters
        data = { name: req.body.name.charAt(0).toUpperCase() + req.body.name.slice(1) }
        myemployeedb.update(query,data).fetch().exec(function (err, employee) {
          employeeName = data.name;
          return res.json(employee)
        })
    },

    delete: function (req, res) {
        let query;
        query = { "id": req.params('id') }
        myemployeedb.destroy(query).fetch().exec(function (err, employee) {
          if (err) return(err);
          return res.json(employee)
        })
    },
      
  

};

