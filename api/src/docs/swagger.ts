import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Api Personajes',
      version: '1.0.0',
      description: 'Api de Personajes de rick and morty',
      contact: {
        name: 'Pedro Plasencia'
      },
      servers: [
        {
          url: 'http://localhost:3000',
          description: 'Local server'
        }
      ]
    }
  },
  apis: ['./routes/*.ts']
};

const specs = swaggerJsdoc(options);
export default specs;