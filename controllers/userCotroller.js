const mongoose = require('mongoose')
const USER = mongoose.model('users')
const {
    badRequestResponse,
    successResponse,
    notFoundResponse,
    errorResponse
  } = require('../middleware/response')
exports.user = {
      get: async function (req, res) {
        try {

          let users = await USER.find({})


          return successResponse(res, {
            data: users,
          })
        } catch (error) {
          return errorResponse(error, req, res)
        }
      }
}
