const { updateCompanyUseCase } = require('../use-cases/update-company-use-case')

/**
 *
 * @param {import('fastify').FastifyRequest} request
 * @param {import('fastify').FastifyReply} reply
 */
async function updateCompanyController(request, reply) {
	try {
		const { socialReason, description } = request.body

		const { companyId } = await updateCompanyUseCase({
			socialReason,
			description,
			companyId: request.params.id,
		})

		return reply.send({ companyId })
	} catch (error) {
		return reply.status(400).send({
			message: error.message,
		})
	}
}

module.exports = { updateCompanyController }
