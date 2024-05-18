const { prisma } = require('../lib/prisma')

/**
 *
 * @param {import('fastify').FastifyRequest} request
 * @param {import('fastify').FastifyReply} reply
 */
async function getUsersBelongToCompanyController(request, reply) {
	const companyId = request.params.id

	const usersBelongToCompany = await prisma.company.findMany({
		where: {
			id: companyId,
		},
		select: {
			User: {
				select: {
					id: true,
					name: true,
					email: true,
					cpf: true,
					phone: true,
					createdAt: true,
				},
			},
		},
	})

	const users = usersBelongToCompany[0].User

	return reply.send(users)
}

module.exports = { getUsersBelongToCompanyController }
