/**
 * Post Data Mapper
 * @exports Post/DataMapper
 */
var a = '';

module.exports = {
    /**
     * Data Mapping for Search
     * @param {Object} requestData - Request Query Object
     * @return {Object} Array of data
     */
    searchData: function (requestData) {
        var search = {};
        search.limit = (!requestData.limit) ? 10 : requestData.limit;
        search.page = (!requestData.page) ? 0 : requestData.page;
        search.search_text = (!requestData.search_text) ? '' : requestData.search_text;
        search.sort = (!requestData.sort) ? 'asc' : requestData.sort;
        search.sort_field = (!requestData.sort_field) ? 'post_title' : requestData.sort_field;
        return search;
    },

    /**
     * Data Mapping for Add functionality
     * @param {Object} post - Data Schema Object
     * @param {Object} requestData - Request Body Object
     * @return {Object} Updated post object
     */
    addData: function (post, requestData,file) {
        post.post_title = requestData.post_title;
        post.post_description = requestData.post_description;
        post.author_id = requestData.author_id;
        post.author_name = requestData.author_name;
        post.image = file.filename;
        post.category = requestData.category;
        return post;
    },

    /**
     * Data Mapping for Edit functionality
     * @param {Object} post - Data Schema Object
     * @param {Object} requestData - Request Body Object
     * @return {Object} Updated post object
     */
    editData: function (post, requestData,file) {
        return this.addData(post, requestData,file);
    },

    /**
     * Data Mapping for Get All functionality
     * @param {Object} resultSet - Resultset
     * @return {Object} Updated result object
     */
    getAllData: function (resultSet) {
        var result = [];
        for (i in resultSet) {
            row = {};
            row.id = resultSet[i]._id;
            row.post_title = resultSet[i].name;
            row.post_description = resultSet[i].post_description;
            row.author_id = resultSet[i].author_id;
            row.author_name = resultSet[i].author_name;
            row.image = resultSet[i].image;
            row.date = resultSet[i].date;
            row.category = resultSet[i].category;
            result.push(row);
        }
        return result;
    },

    /**
     * Data Mapping for Get One functionality
     * @param {Object} resultSet - Resultset
     * @return {Object} Updated result object
     */
    getOneData: function (resultSet) {
        row = {};
        row.id = resultSet._id;
        row.post_title = resultSet.name;
        row.post_description = resultSet.post_description;
        row.author_id = resultSet.author_id;
        row.author_name = resultSet.author_name;
        row.image = resultSet.image;
        row.date = resultSet.date;
        row.category = resultSet.category;
        return row;
    },
};