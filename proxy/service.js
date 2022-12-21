const convict = require('convict');

const config = convict({
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV'
  },
  port: {
    doc: 'The port to bind.',
    format: 'port',
    default: 3001,
    env: 'PORT',
    arg: 'port'
  },
  remote_url: {
    format: '*',
    default: 'http://localhost:3000/',
  }
});

config.validate({allowed: 'strict'});

module.exports = config;