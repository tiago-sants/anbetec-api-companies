const {
	createCompanyController,
} = require('../../controllers/create-company-controller')

const { createCompanySchema } = require('./schemas/create-company-schema')

/**
 *
 * @param {import('fastify').FastifyInstance} app
 */
async function createCompanyRouter(app) {
	app
		.withTypeProvider()
		.post('/', { schema: createCompanySchema }, createCompanyController)
}

module.exports = { createCompanyRouter }
