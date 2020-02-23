const express = require('express');
const app = express();
const port = 8080;
const IP = '192.168.1.105';
app.use(express.static('./dist/hospital-add-on'));
app.get('*', (req, res) => {
  res.sendFile(`index.html`, { root: www });
});
app.listen(port, IP, () => console.log(`listening on http://${IP}:${port}`));