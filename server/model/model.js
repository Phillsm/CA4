var mongoose = require('mongoose');

var wikiSchema = mongoose.Schema({
  title: { type: String, index: true},
  url: { type: String},
  abstract: { type: String},
  categories: {type: [{type: String}], index: true},
  links: {type: [{type: String}], index: true},
  headings: [{heading: {type: String}, position: {type: Number}}]},
  { collection: 'wiki' }
);

exports.wikiModel = mongoose.model('wiki', wikiSchema);
/*
var model  = mongoose.model('wiki', wikiSchema);

exports.getWiki = function(title,callback){
  model.find({title: title},function(err,wiki){
    callback(err,wiki);
  })
}

exports.findWiki = function(title,callback){
  model.find({title: new RegExp(title,'i')},function (err,wikis){
    callback(err,wikis);
  })
}

exports.getCategories = function(callback){
  model.distinct('categories',function(err,result){
    callback(err,result);
  })
}

exports.getWikisWithCategory = function(category,callback){
  model.find({categories: category}, 'title abstract',function(err,data){
    callback(err,data);
  })
}

*/