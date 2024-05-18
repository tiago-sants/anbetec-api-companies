const {
	getCompanyByIdUseCase,
} = require('../use-cases/get-company-by-id-use-case')

/**
 *
 * @param {import('fastify').FastifyRequest} request
 * @param {import('fastify').FastifyReply} reply
 */
async function getCompanyController(request, reply) {
	try {
		const companyId = request.params.id

		const { company } = await getCompanyByIdUseCase(companyId)

		return reply.status(200).send({ company })
	} catch (error) {
		return reply.status(400).send({
			message: error.message,
		})
	}
}

module.exports = { getCompanyController }
