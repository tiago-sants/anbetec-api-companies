const {
	getAllCompanyController,
} = require('../../controllers/get-all-company-controller')

const { getAllCompanySchema } = require('./schemas/get-all-company-schema')

/**
 *
 * @param {import('fastify').FastifyInstance} app
 */

async function getAllCompanyRouter(app) {
	app
		.withTypeProvider()
		.get(
			'/',
			{ schema: getAllCompanySchema, onRequest: [app.authenticate] },
			getAllCompanyController
		)
}

module.exports = { getAllCompanyRouter }
