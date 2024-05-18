const { z } = require('zod')

const getCompanySchema = {
	summary: 'Get an company',
	tags: ['Companies'],

	security: [{ Authorization: [] }],

	params: z.object({
		id: z.coerce.number(),
	}),

	response: {
		200: z.object({
			company: z.object({
				id: z.number(),
				socialReason: z.string(),
				cnpj: z.string(),
				description: z.string(),
			}),
		}),
	},
}

module.exports = { getCompanySchema }
