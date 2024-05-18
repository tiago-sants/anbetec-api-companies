const {
	getUsersBelongToCompanySchema,
} = require('./schemas/get-users-belong-to-company-schema')
const {
	getUsersBelongToCompanyController,
} = require('../../controllers/get-users-belong-to-company-controller')

/**
 *
 * @param {import('fastify').FastifyInstance} app
 */

async function getUsersBelongToCompanyRouter(app) {
	app
		.withTypeProvider()
		.get(
			'/:id/users',
			{ schema: getUsersBelongToCompanySchema, onRequest: [app.authenticate] },
			getUsersBelongToCompanyController
		)
}

module.exports = { getUsersBelongToCompanyRouter }
