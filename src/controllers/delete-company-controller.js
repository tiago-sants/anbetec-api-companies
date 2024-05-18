const { deleteCompanyUseCase } = require('../use-cases/delete-company-use-case')

/**
 *
 * @param {import('fastify').FastifyRequest} request
 * @param {import('fastify').FastifyReply} reply
 */
async function deleteCompanyController(request, reply) {
	try {
		const companyId = request.params.id

		await deleteCompanyUseCase(companyId)

		return reply.status(200).send()
	} catch (error) {
		return reply.status(400).send({
			message: error.message,
		})
	}
}

module.exports = { deleteCompanyController }
