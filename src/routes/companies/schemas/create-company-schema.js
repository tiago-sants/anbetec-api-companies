const { z } = require('zod')

const createCompanySchema = {
	summary: 'Create an company',
	tags: ['Companies'],

	security: [{ Authorization: [] }],

	body: z.object({
		socialReason: z.string(),
		cnpj: z.string(),
		description: z.string(),
	}),

	response: {
		201: z.object({
			companyId: z.number(),
		}),
	},
}

module.exports = {
	createCompanySchema,
}
