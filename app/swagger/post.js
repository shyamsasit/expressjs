/**
 * @swagger
 * /api/posts:
 *   post:
 *     tags:
 *       - Post
 *     description: Create Post
 *     consumes:
 *        - multipart/form-data
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: post_title
 *         description: Post Title
 *         in: formData
 *         required: true
 *         type: string
 *       - name: post_description
 *         description: Post Description
 *         in: formData
 *         required: true
 *         type: string
 *       - name: image
 *         description: Post Image
 *         in: formData
 *         required: true
 *         type: file
 *       - name: author_name
 *         description: Author Name
 *         in: formData
 *         required: true
 *         type: string
 *       - name: author_id
 *         description: Author ID
 *         in: formData
 *         required: true
 *         type: integer
 *         format: int64
 *         default: 5
 *       - name: category
 *         description: Category
 *         in: formData
 *         required: true
 *         type: string
 *         enum:
 *         - Food
 *         - Travel
 *         - Lifestyle
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
 * /api/posts/{id}:
 *   put:
 *     tags:
 *       - Post
 *     description: Edit Post
 *     consumes:
 *        - multipart/form-data
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Post ID
 *         in: formData
 *         required: true
 *         type: string
 *       - name: post_title
 *         description: Post Title
 *         in: formData
 *         required: true
 *         type: string
 *       - name: post_description
 *         description: Post Description
 *         in: formData
 *         required: true
 *         type: string
 *       - name: image
 *         description: Post Image
 *         in: formData
 *         required: true
 *         type: file
 *       - name: author_name
 *         description: Author Name
 *         in: formData
 *         required: true
 *         type: string
 *       - name: author_id
 *         description: Author ID
 *         in: formData
 *         required: true
 *         type: string
 *       - name: category
 *         description: Category
 *         in: formData
 *         required: true
 *         type: string
 *         enum:
 *         - Food
 *         - Travel
 *         - Lifestyle
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
 * /api/posts/{id}:
 *   get:
 *     tags:
 *       - Post
 *     description: Returns a single post
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: post's id
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
 * /api/posts/{id}:
 *   delete:
 *     tags:
 *       - Post
 *     description: Delete a single post
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: post's id
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
 * /api/posts:
 *   get:
 *     tags:
 *       - Post
 *     description: Returns all posts
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