var model = require('./model/model.js')

var wikiModel = model.wikiModel

exports.getWiki = function(title,callback){
 wikiModel.find({title: title},function(err,wiki){
    callback(err,wiki);
  })
}

exports.findWiki = function(title,callback){
  wikiModel.find({title: new RegExp(title,'i')},function (err,wikis){
    callback(err,wikis);
  })
}

exports.getCategories = function(callback){
  wikiModel.distinct('categories',function(err,result){
    callback(err,result);
  })
}

exports.getWikisWithCategory = function(category,callback){
  wikiModel.find({categories: category}, 'title abstract',function(err,data){
    callback(err,data);
  })
}