const { z } = require('zod')

const getUsersBelongToCompanySchema = {
	summary: 'Get all users belong to the company through the company id.',
	tags: ['Companies'],

	security: [{ Authorization: [] }],

	params: z.object({
		id: z.coerce.number(),
	}),

	response: {
		200: z.array(
			z.object({
				id: z.number(),
				name: z.string(),
				email: z.string().email(),
				cpf: z.string(),
				phone: z.string(),
				createdAt: z.date(),
			})
		),
	},
}

module.exports = { getUsersBelongToCompanySchema }
