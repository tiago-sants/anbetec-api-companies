const {
	updateCompanyController,
} = require('../../controllers/update-company-controller')

const { updateCompanySchema } = require('./schemas/update-company-schema')
/**
 *
 * @param {import('fastify').FastifyInstance} app
 */
async function updateCompanyRouter(app) {
	app
		.withTypeProvider()
		.put(
			'/:id',
			{ schema: updateCompanySchema, onRequest: [app.authenticate] },
			updateCompanyController
		)
}

module.exports = { updateCompanyRouter }
