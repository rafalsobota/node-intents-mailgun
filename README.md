# Mailgun integration for Intents

This project is intented to use with [Intents](https://github.com/rafalsobota/node-intents) module.

## Example as part of Intents

Details about Intents are at [Intents project page](https://github.com/rafalsobota/node-intents)

    npm install intents

in Intents configuration at ./config/default.coffee:

    mailgun = require 'intents-mailgun'
    
    @mail = mailgun
      key: 'MyMailgunKey'

in app code:

    var mail = require('intents').mail;
    
    mail.send({
      recipient: 'me@gmail.com',
      sender: 'no-reply@appload.pl',
      subject: 'Some subject',
      text: 'Some text'}, function(error) {
        if(error) {
          console.error(error);
        }
      });

## Example as standalone module

    var intentsMailgun = require('intentsMailgun');
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