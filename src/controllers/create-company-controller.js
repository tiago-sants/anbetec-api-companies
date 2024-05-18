/**
 *
 * @param {import('fastify').FastifyRequest} request
 * @param {import('fastify').FastifyReply} reply
 */
async function createCompanyController(request, reply) {
	const { socialReason, cnpj, description } = request.body

	const company = await prisma.company.create({
		data: {
			cnpj,
			description,
			socialReason,
		},
		select: {
			id: true,
		},
	})

	return reply.status(201).send({
		companyId: company.id,
	})
}

module.exports = { createCompanyController }
