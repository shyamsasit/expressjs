/**
 * Swagger Configuration
 * @exports General
 */


var swaggerJSDoc = require('swagger-jsdoc');
/**
 * Swagger Configuration
 */
var swaggerSpec = swaggerJSDoc({
  swaggerDefinition: {
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description: 'Api Documentation',
    },
    host: process.env.HOST + ':' + process.env.PORT,
    basePath: '/',
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
  },
  apis: ['./app/swagger/*.js'],
});
module.exports = swaggerSpec;