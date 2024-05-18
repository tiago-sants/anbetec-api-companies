const { prisma } = require('../lib/prisma')

/**
 *
 * @param {number} companyId
 * @returns {Promise<{company: {id: number, name: string, email: string, password: string, cpf: string, phone: string, company: { id: number, socialReason: string }}}>}
 */
async function getCompanyByIdUseCase(companyId) {
	const company = await prisma.company.findUnique({
		where: {
			id: companyId,
		},
	})

	if (company === null) {
		throw new Error('company not found.')
	}

	return { company }
}

module.exports = { getCompanyByIdUseCase }
