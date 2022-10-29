const createError = require("http-errors");
const data = require('../../data/phones.json')

module.exports.list = (req, res) => {    
  res.status(200).json(data);
}

module.exports.findId = (req, res) => {    
  const {id} = req.params
  const phone = data.filter(p => p.id === parseInt(id))
  res.status(200).json(phone)
}
