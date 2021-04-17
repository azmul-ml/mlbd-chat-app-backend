const Joi = require('joi');
const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 500
  }
});

const Message = mongoose.model('Message', messageSchema);

function validateMessage(message) {
  const schema = {
    message: Joi.string().min(1).required()
  };

  return Joi.validate(message, schema);
}

exports.messageSchema = messageSchema;
exports.Message = Message; 
exports.validate = validateMessage;