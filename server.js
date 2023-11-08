const express = require('express');
const useragent = require('express-useragent');
const app = express();

app.use(useragent.express());

app.get('/', (req, res) => {
  if (req.useragent.isMobile) {
    res.sendFile(__dirname + '/src/frontend/mobile/index.html');
  } else {
    res.sendFile(__dirname + '/src/frontend/desktop/index.html');
  }
});

app.get('/style.css', (req, res) => {
  if (req.useragent.isMobile) {
    res.sendFile(__dirname + '/src/frontend/mobile/style.css');
  } else {
    res.sendFile(__dirname + '/src/frontend/desktop/style.css');
  }
});

app.get('/script.js', (req, res) => {
  if (req.useragent.isMobile) {
    res.sendFile(__dirname + '/src/frontend/mobile/script.js');
  } else {
    res.sendFile(__dirname + '/src/frontend/desktop/script.js');
  }
});


const port = process.env.PORT || 3000;
app.listen(port, function(){  
  console.info(`Server running in the port ${port}`);
});
