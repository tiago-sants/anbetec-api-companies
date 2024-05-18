const {
	deleteCompanyController,
} = require('../../controllers/delete-company-controller')

const { deleteCompanySchema } = require('./schemas/delete-company-schema')

/**
 *
 * @param {import('fastify').FastifyInstance} app
 */

async function deleteCompanyRouter(app) {
	app
		.withTypeProvider()
		.delete(
			'/:id',
			{ schema: deleteCompanySchema, onRequest: [app.authenticate] },
			deleteCompanyController
		)
}

module.exports = { deleteCompanyRouter }
