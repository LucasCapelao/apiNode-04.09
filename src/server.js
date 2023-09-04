const express = require('express');
const app = express();
const port = 3006;

app.get('/teste', (req, res) => {
  res.send('Api retornou');
})

app.listen(port, () => {
  console.log(`Api rodando na porta: ${port}`);
})