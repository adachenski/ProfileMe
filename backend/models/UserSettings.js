/**
 * Created by Administrator on 11/17/2016.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSettingsSchema = new Schema({
    mainHeader: String,
    mainContent: String,
    mainBackground: String,
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
},{timestamps: true});


var UserSettingsModel = mongoose.model('UserSettingModel', UserSettingsSchema);

module.exports = UserSettingsModel;