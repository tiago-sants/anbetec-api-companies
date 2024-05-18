const bcrypt = require('bcryptjs')

const { prisma } = require('../lib/prisma')

/**
 *
 * @param {{socialReason: string, cnpj: string, description: string}} data
 * @returns {Promise<{ companyId: number }>}
 */
async function createCompanyUseCase(data) {}

module.exports = { createCompanyUseCase }
