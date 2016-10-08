Back End Spec:

1.) Messages Controller

- GET '/messages'
  request:
    Current implemention contains only a 'get-all' function so no query is being sent.
  response: 
    JSON stringified array containing message objects. Each message object should contain the keys
      id: type integer
      timestamp: type integer
      author: type string
      content: type string

- POST '/messages'
  request: 
    Request will contain a JSON stringified message object meeting the same specification as the above.
  response:
    looking to recieve a status code to confirm post success or error to inform user that message has not been saved.

- PUT '/messages'
  request:
    Request will contain a json stringified object with two properties:
      newMessage: 
        Will contain a new message object meeting the same specs as above. 
      index: 
        An integer specifying the index of the message object that the new message object is intended to replace.

2.) User Controller

- POST '/users'
  request:
    Request will come over containg only a string specifying the new username that is intended to be used.
