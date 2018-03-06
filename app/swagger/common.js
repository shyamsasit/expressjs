/**
 * @swagger
 * tags:
 *   - name: Contest
 *     description: Web services of contests
 *   - name: UserAuth
 *     description: Web services of users Authentication
 *   - name: Post
 *     description: Web services of posts
 *   - name: Contact
 *     description: Web services of contacts
 * securityDefinitions:
 *   ApiKey:
 *     type: apiKey
 *     in: header
 *     name: api_key
 *   SessionKey:
 *     type: apiKey
 *     in: header
 *     name: session_key
 * definitions:
 *   ApiResponse:
 *     type: object
 *     properties:
 *       code:
 *         type: integer
 *         format: int32
 *       message:
 *         type: string
 */

 /**
 * @swagger
 * definitions:
 *   GeneralResult:
 *     type: object
 *     properties:
 *       message:
 *         type: string
 *       error_code:
 *         type: integer
 *         format: int32
 *       result:
 *         type: object
 *       additional_data:
 *         type: string
 */