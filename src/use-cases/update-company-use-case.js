const { prisma } = require('../lib/prisma')

/**
 *
 * @param {{socialReason: string, description: string, companyId: number}} data
 * @returns {Promise<{ companyId: number }>}
 */
async function updateCompanyUseCase(data) {
	const { socialReason, description, companyId } = data

	const companyExists = await prisma.company.findUnique({
		where: {
			id: companyId,
		},
	})

	if (companyExists === null) {
		throw new Error('Company not found.')
	}

	const company = await prisma.company.update({
		data: {
			socialReason,
			description,
		},
		where: {
			id: companyId,
		},
		select: {
			id: true,
		},
	})

	return {
		companyId: company.id,
	}
}

module.exports = { updateCompanyUseCase }
