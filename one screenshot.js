const fs = require('fs') // this is a file stream
const axios = require('axios').default;
const SnapAPI = "https://shot.screenshotapi.net/screenshot?token=2NY00FV-EXKMZ9K-Q0NN84C-BBKYA6B&url=https://www.forumbusinesstraining.co.uk/&output=image"


axios({
    method: 'get',
    url: SnapAPI, //one snapshot URL API is passed via this variable
    responseType: 'stream'
  })
    .then(function (response) {
      response.data.pipe(fs.createWriteStream('./Website Snapshots/forum.jpg'))
    });
