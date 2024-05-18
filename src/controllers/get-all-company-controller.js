const { prisma } = require('../lib/prisma')

/**
 *
 * @param {import('fastify').FastifyRequest} request
 * @param {import('fastify').FastifyReply} reply
 */
async function getAllCompanyController(_request, reply) {
	const companies = await prisma.company.findMany()
	return reply.send(companies)
}

module.exports = { getAllCompanyController }
