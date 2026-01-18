import { fastify } from 'fastify'

const app = fastify()

app
  .listen({
    port: 3333,
    host: '0.0.0.0', // this allow us to host the app in Railway
  })
  .then(() => {
    console.log('HTTP server is running!')
  })
