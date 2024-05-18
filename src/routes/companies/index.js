const { createCompanyRouter } = require('./create-company')
const { deleteCompanyRouter } = require('./delete-company')
const { getAllCompanyRouter } = require('./get-all-company')
const { getCompanyRouter } = require('./get-company')
const { updateCompanyRouter } = require('./update-company')
const {
	getUsersBelongToCompanyRouter,
} = require('./get-users-belong-to-company')

/**
 *
 * @param {import('fastify').FastifyInstance} app
 */
async function companyRoutes(app) {
	app.register(createCompanyRouter)
	app.register(getAllCompanyRouter)
	app.register(getCompanyRouter)
	app.register(deleteCompanyRouter)
	app.register(updateCompanyRouter)
	app.register(getUsersBelongToCompanyRouter)
}

module.exports = { companyRoutes }
