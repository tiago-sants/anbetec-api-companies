const fastifySwaggerUI = require('@fastify/swagger-ui')

const { companyRoutes } = require('./companies')

/**
 *
 * @param {import('fastify').FastifyInstance} app
 */
async function routes(app) {
	app.register(fastifySwaggerUI, {
		prefix: '/docs',
	})

	app.register(companyRoutes, {
		prefix: '/companies',
	})
}

module.exports = { routes }
