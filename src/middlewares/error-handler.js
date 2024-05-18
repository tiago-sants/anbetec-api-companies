const { ZodError } = require('zod')

/**
 *
 * @param {import('fastify').FastifyError} error
 * @param {import('fastify').FastifyRequest} request
 * @param {import('fastify').FastifyReply} reply
 */
async function errorHandler(error, _request, reply) {
	if (error instanceof ZodError) {
		return reply.status(400).send({
			message: 'Error during validation',
			errors: error.flatten().fieldErrors,
		})
	}

	return reply.status(500).send({
		message: 'Internal server error',
	})
}

module.exports = { errorHandler }
