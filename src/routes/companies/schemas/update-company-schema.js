const { z } = require('zod')

const updateCompanySchema = {
	summary: 'Update an company',
	tags: ['Companies'],

	security: [{ Authorization: [] }],

	params: z.object({
		id: z.coerce.number(),
	}),

	body: z.object({
		socialReason: z.string(),
		description: z.string(),
	}),

	response: {
		200: z.object({
			companyId: z.number(),
		}),
	},
}

module.exports = {
	updateCompanySchema,
}
