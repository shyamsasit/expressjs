/**
 * @swagger
 * definitions:
 *   UserRegistration:
 *     type: object
 *     required:
 *       - user_name
 *       - email
 *       - password
 *       - image
 *     properties:
 *       user_name:
 *         type: string
 *       email:
 *         type: string
 *       password:
 *         type: string
 *       image:
 *         type: file
 *       
 */


 /**
 * @swagger
 * definitions:
 *   UserLogin:
 *     type: object
 *     required:
 *       - email
 *       - password
 *     properties:
 *       email:
 *         type: string
 *       password:
 *         type: string
 */

 
 /**
 * @swagger
 * definitions:
 *   UserForgot:
 *     type: object
 *     required:
 *       - email
 *     properties:
 *       email:
 *         type: string
 */

 
 /**
 * @swagger
 * definitions:
 *   UserReset:
 *     type: object
 *     required:
 *       - email
 *       - password
 *     properties:
 *       email:
 *         type: string
 *       password:
 *         type: string
 */


 /**
 * @swagger
 * /api/users/auth/register:
 *   post:
 *     tags:
 *       - UserAuth
 *     description: User Registration
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user
 *         description: User object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/UserRegistration'
 *     responses:
 *       200:
 *         description: Registration Successfull
 *         schema:
 *           $ref: '#/definitions/GeneralResult'
 *     security:
 *       - ApiKey: []
 */


 /**
 * @swagger
 * /api/users/auth/login:
 *   post:
 *     tags:
 *       - UserAuth
 *     description: User Login
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user
 *         description: User object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/UserLogin'
 *     responses:
 *       200:
 *         description: Login Successfull/Failed
 *         schema:
 *           $ref: '#/definitions/GeneralResult'
 *     security:
 *       - ApiKey: []
 */

 /**
 * @swagger
 * /api/users/auth/uploadimage:
 *   post:
 *     tags:
 *       - UserAuth
 *     description: Upload User Image
 *     consumes:
 *       - multipart/form-data
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: image
 *         description: User Profile Pic
 *         in: formData
 *         required: true
 *         type: file
 *     responses:
 *       200:
 *         description: Uploaded Successfully
 *     security:
 *       - ApiKey: []
 *       - SessionKey: []
 */

/**
 * @swagger
 * /api/users/auth/userprofile:
 *   get:
 *     tags:
 *       - UserAuth
 *     description: User Profile
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: User Profile Fetched Successfully
 *     security:
 *       - ApiKey: []
 *       - SessionKey: []
 */


 /**
 * @swagger
 * /api/users/auth/forgot:
 *   get:
 *     tags:
 *       - UserAuth
 *     description: User Forgot Password
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user
 *         description: User object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/UserForgot'
 *     responses:
 *       200:
 *         description: Reset code sent to email
 *     security:
 *       - ApiKey: []
 */

 
 /**
 * @swagger
 * /api/users/auth/reset:
 *   put:
 *     tags:
 *       - UserAuth
 *     description: User Reset Password
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user
 *         description: User object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/UserReset'
 *     responses:
 *       200:
 *         description: Password Reset Successfully
 *     security:
 *       - ApiKey: []
 */

 /**
 * @swagger
 * /api/users/auth/logout:
 *   delete:
 *     tags:
 *       - UserAuth
 *     description: Logout a user
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Logout Successfully
 *     security:
 *       - ApiKey: []
 *       - SessionKey: []
 */