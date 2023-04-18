'use strict'

const express = require('express')
const accessController = require('../../controllers/access.controller')
const { authentication } = require('../../auth/authUltils')
const asyncHandler = require('../../helpers/asyncHandler')
const router = express.Router()

// signUP & login
router.post('/shop/signup', asyncHandler(accessController.signUp))
router.post('/shop/login', asyncHandler(accessController.login))

// authentication
router.use(authentication)
//
router.post('/shop/logout', asyncHandler(accessController.logout))
router.post('/shop/handlerRefreshToken', asyncHandler(accessController.handlerRefreshToken))


module.exports = router