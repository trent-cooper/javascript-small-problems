function mailCount(emailData) {
  let messages = emailData.split(/##\|\|##/g);
  let messageCount = messages.length;

  let parsed = messages.map(message => message.split(/#\/#/g))
                      .map(message => new Date(message[2].slice(7)))
                      .sort((a, b) => a - b)
                      .map(date => date.toDateString());
  
  let first = parsed[0];
  let last = parsed[parsed.length - 1];                     
  console.log(`Count of Email: ${messageCount}`);
  console.log(`Date Range: ${first} - ${last}`);
}

mailCount(emailData);