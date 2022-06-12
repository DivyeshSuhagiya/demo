const mongoose = require('mongoose');
const DEMO = mongoose.model('demoSchema')


exports.demo = {
    get: async (req, res) => {
        try {
            const demo = await DEMO.find({})
            res.json({
                isSuccess: true,
                data: demo
            })
        } catch (error) {
            res.json({
                isSuccess: false,
                data: error
            })
        }
    },
    post: async (req, res) => {
        try {
            const demo = {
                firstName: req.body.firstName,
                lastName: req.body.lastName
            }
            const isCreated = await DEMO.create(demo);
            if (isCreated) {
                return successResponse(res, {
                    message: 'demo created successfully',
                })
            }
            else {
                return badRequestResponse(res, {
                    message: 'Failed to create student',
                })
            }
        } catch (error) {
        }
    }
}