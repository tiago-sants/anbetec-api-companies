const { prisma } = require('../lib/prisma')

/**
 *
 * @param {number} companyId
 * @returns {Promise<boolean>}
 */
async function deleteCompanyUseCase(companyId) {
	const company = await prisma.company.findUnique({
		where: {
			id: companyId,
		},
		select: {
			id: true,
		},
	})

	if (company === null) {
		throw new Error('Company not found.')
	}

	await prisma.company.delete({
		where: {
			id: companyId,
		},
	})

	return true
}

module.exports = { deleteCompanyUseCase }
