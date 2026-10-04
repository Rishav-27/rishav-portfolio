const https = require('https');
https.get('https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=flying%20eagle%20filetype:gif&utf8=&format=json', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => console.log(JSON.parse(data).query.search));
});
