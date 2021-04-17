const Pusher = require('pusher');

module.exports = new Pusher({
    appId: '1084873',
    key: '91b3fe78f65fb4acdaca',
    secret: '80ac45bd7d677f9da47d',
    cluster: 'ap1',
    encrypted: true
});
