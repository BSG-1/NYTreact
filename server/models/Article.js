/**
 *
 * Example User model for mongodb
 *
 */

/*
 * 
 * import mongoose from 'mongoose';
 * const Schema = mongoose.Schema;
 *
 * let UserSchema = new Schema({
 *   email: {type: String, required: true, unique: true, dropDups: true},
 *   password: {type: String, required: true},
 *   created_at: {type: Date, default: Date.now},
 *   updated_at: {type: Date},
 *   deleted_at: {type: Date}
 * });
 * export default mongoose.model('User', UserSchema);
 */
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var articleSchema = new Schema({
  title: String,
  date: Date,
  url: String
});

var Article = mongoose.model("Article", articleSchema);

module.exports = Article;
