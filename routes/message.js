const auth = require('../middleware/auth');
const {Message, validate} = require('../models/message');
const express = require('express');
const router = express.Router();
const pusher = require('../startup/pusher');

router.post('/', auth, async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  let message = new Message({ message: req.body.message });
  message = await message.save();

  pusher.trigger('chatApp', 'message', { message: req.body.message });
  
  res.send(message);
});

module.exports = router;