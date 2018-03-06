/**
 * @swagger
 * definitions:
 *   Contest:
 *     type: object
 *     required:
 *       - name
 *       - entry_fees
 *     properties:
 *       name:
 *         type: string
 *       entry_fees:
 *         type: integer
 *         format: int64
 *       description:
 *         type: string
 *       visibility:
 *         type: string
 *         enum:
 *         - Public
 *         - Private
 */


/**
 * @swagger
 * /api/contests:
 *   get:
 *     tags:
 *       - Contest
 *     description: Returns all contests
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


 /**
 * @swagger
 * /api/contests/{id}:
 *   get:
 *     tags:
 *       - Contest
 *     description: Returns a single contest
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: contest's id
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
 * /api/contests:
 *   post:
 *     tags:
 *       - Contest
 *     description: Creates a new contest
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: contest
 *         description: Contest object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Contest'
 *     responses:
 *       200:
 *         description: Successfully created
 *     security:
 *       - ApiKey: []
 *       - SessionKey: []
 */



/**
 * @swagger
 * /api/contests/{id}:
 *   put:
 *     tags: 
 *       - Contest
 *     description: Updates a single contest
 *     produces: 
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: contest's id
 *         in: path
 *         required: true
 *         type: string
 *       - name: contest
 *         description: Fields for the contest resource
 *         in: body
 *         schema:
 *           $ref: '#/definitions/Contest'
 *     responses:
 *       200:
 *         description: Successfully updated
 *     security:
 *       - ApiKey: []
 *       - SessionKey: []
 */


 /**
 * @swagger
 * /api/contests/{id}:
 *   delete:
 *     tags:
 *       - Contest
 *     description: Deletes a single contest
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Contest's id
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Successfully deleted
 *     security:
 *       - ApiKey: []
 *       - SessionKey: []
 */