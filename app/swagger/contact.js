/**
 * @swagger
 * definitions:
 *   Contact:
 *     type: object
 *     required:
 *       - contact_name
 *       - contact_email
 *       - subject
 *       - message
 *     properties:
 *       contact_name:
 *         type: string
 *       message:
 *         type: string
 *       contact_email:
 *         type: string
 *       subject:
 *          type: string
 */

/**
 * @swagger
 * definitions:
 *   Contact1:
 *     type: object
 *     required:
 *       - id
 *       - contact_name
 *       - contact_email
 *       - subject
 *       - message
 *     properties:
 *       id:
 *         type: string
 *       contact_name:
 *         type: string
 *       message:
 *         type: string
 *       contact_email:
 *         type: string
 *       subject:
 *          type: string
 */


/**
 * @swagger
 * /api/contacts:
 *   post:
 *     tags:
 *       - Contact
 *     description: Create Contact
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: contact
 *         description: Contest object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Contact'
 *     responses:
 *       200:
 *         description: Get all records
 *         schema:
 *           $ref: '#/definitions/GeneralResult'
 *     security:
 *       - ApiKey: []
 *       - SessionKey: []
 */

/**
 * @swagger
 * /api/contacts/{id}:
 *   put:
 *     tags:
 *       - Contact
 *     description: Edit Contact
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: contact
 *         description: contact object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Contact1'
 *     responses:
 *       200:
 *         description: Get all records
 *         schema:
 *           $ref: '#/definitions/GeneralResult'
 *     security:
 *       - ApiKey: []
 *       - SessionKey: []
 */

/**
 * @swagger
 * /api/contacts/{id}:
 *   get:
 *     tags:
 *       - Contact
 *     description: Returns a single contact
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: contact's id
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Get single record
 *         schema:
 *           $ref: '#/definitions/GeneralResult'
 *     security:
 *       - ApiKey: []
 *       - SessionKey: []
 */

/**
 * @swagger
 * /api/contacts/{id}:
 *   delete:
 *     tags:
 *       - Contact
 *     description: Delete a single contact
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: contact's id
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Get single record
 *         schema:
 *           $ref: '#/definitions/GeneralResult'
 *     security:
 *       - ApiKey: []
 *       - SessionKey: []
 */

/**
 * @swagger
 * /api/contacts:
 *   get:
 *     tags:
 *       - Contact
 *     description: Returns all contacts
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: page
 *         description: Page Number
 *         in: query
 *         required: true
 *         type: integer
 *         format: int64
 *         default: 0
 *       - name: limit
 *         description: Number of records in a page
 *         in: query
 *         required: true
 *         type: integer
 *         format: int64
 *         default: 5
 *       - name: sort
 *         description: Sort Order (asc or desc)
 *         in: query
 *         required: true
 *         type: string
 *         default: asc
 *       - name: sort_field
 *         description: Sort field name
 *         in: query
 *         required: false
 *         type: string
 *       - name: search_text
 *         description: Search String
 *         in: query
 *         required: false
 *         type: string
 *     responses:
 *       200:
 *         description: Get all records
 *         schema:
 *           $ref: '#/definitions/GeneralResult'
 *     security:
 *       - ApiKey: []
 *       - SessionKey: []
 */