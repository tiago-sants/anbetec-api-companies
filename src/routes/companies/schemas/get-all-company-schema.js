const { z } = require('zod')

const getAllCompanySchema = {
	summary: 'Get all companies',
	tags: ['Companies'],

	security: [{ Authorization: [] }],

	response: {
		200: z.array(
			z.object({
				id: z.number(),
				socialReason: z.string(),
				cnpj: z.string(),
				description: z.string(),
			})
		),
	},
}

module.exports = { getAllCompanySchema }
