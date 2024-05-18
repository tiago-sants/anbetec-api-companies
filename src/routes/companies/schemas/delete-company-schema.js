const { z } = require('zod')

const deleteCompanySchema = {
	summary: 'Delete an company',
	tags: ['Companies'],

	security: [{ Authorization: [] }],

	params: z.object({
		id: z.coerce.number(),
	}),

	response: {
		200: z.string(),
	},
}

module.exports = { deleteCompanySchema }
