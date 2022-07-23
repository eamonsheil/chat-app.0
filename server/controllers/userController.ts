const asyncHandler = require('express-async-handler')

export const login = asyncHandler(async (req, res) => {
    console.log(req.body)
})

export const logout = asyncHandler(async (req, res) => {
    console.log(req)
})

