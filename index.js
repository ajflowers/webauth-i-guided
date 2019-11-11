const server = require('./api/server.js');

const bcrypt = require('bcryptjs')

server.use(bcrypt());

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`\n** Running on port: ${PORT} **\n`));
