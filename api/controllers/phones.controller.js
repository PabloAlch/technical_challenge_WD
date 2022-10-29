const createError = require("http-errors");
const data = require('../../data/phones.json')

module.exports.list = (req, res) => {    
  res.json(data);
}

module.exports.findId = (req, res) => {    
  const id = req.params.id
  const user = users.find
}
