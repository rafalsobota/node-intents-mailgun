# Mailgun integration for Intents

### As standalone module

    var intentsMailgun = require 'intentsMailgun';
    var mail = intentsMailgun({key: 'MyMailgunKey'});
    
    mail.send({
      recipient: 'me@gmail.com',
      sender: 'no-reply@appload.pl',
      subject: 'Some subject',
      text: 'Some text'}, function(error) {
        if(error) {
          console.error(error);
        }
      });

### As part of Intents