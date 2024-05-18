const {
	getCompanyController,
} = require('../../controllers/get-company-controller')

const { getCompanySchema } = require('./schemas/get-company-schema')

/**
 *
 * @param {import('fastify').FastifyInstance} app
 */

async function getCompanyRouter(app) {
	app
		.withTypeProvider()
		.get(
			'/:id',
			{ schema: getCompanySchema, onRequest: [app.authenticate] },
			getCompanyController
		)
}

module.exports = { getCompanyRouter }
