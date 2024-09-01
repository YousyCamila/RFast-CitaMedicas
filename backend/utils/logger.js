const fs = require('fs');
const path = require('path');

const logStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });

const logger = (req, res, next) => {
    const { method, url } = req;
    const log = `${method} ${url}`;
    logStream.write(`${new Date().toISOString()} - ${log}\n`);
    next();
};

module.exports = logger;
