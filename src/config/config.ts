const dotenv = require('dotenv');
const result = dotenv.config();

if (result.error) {
    throw result.error;
}

module.exports = {
    endpoint: process.env.API_ENDPOINT,
    port: process.env.PORT,
}
