var Mailgun = require('mailgun').Mailgun;

module.exports = function(config) {
  
  var mailgun = new Mailgun(config.key);
  
  var send = function(options, callback) {
    options.recipients ||= [options.recipient];
    options.subject ||= options.topic;
    
    if (options.text) {
      mailgun.sendText(options.sender, options.recipients, options.subject, options.text, callback);
    } else {
      throw new Error('Please specify text option');
    }
    
  }
  
  return {send: send};
}