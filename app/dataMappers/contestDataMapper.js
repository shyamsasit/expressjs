/**
 * Contest Data Mapper
 * @exports Contest/DataMapper
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
        search.sort_field = (!requestData.sort_field) ? 'name' : requestData.sort_field;
        return search;
    },

    /**
     * Data Mapping for Add functionality
     * @param {Object} contest - Data Schema Object
     * @param {Object} requestData - Request Body Object
     * @return {Object} Updated contest object
     */
    addData: function (contest, requestData) {
        contest.name = requestData.name;
        contest.entry_fees = requestData.entry_fees;
        contest.description = requestData.description;
        contest.visibility = requestData.visibility;
        return contest;
    },

    /**
     * Data Mapping for Edit functionality
     * @param {Object} contest - Data Schema Object
     * @param {Object} requestData - Request Body Object
     * @return {Object} Updated contest object
     */
    editData: function (contest, requestData) {
        return this.addData(contest, requestData);
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
            row.contest_name = resultSet[i].name;
            row.entry_fees = resultSet[i].entry_fees;
            row.description = resultSet[i].description;
            row.visibility = resultSet[i].visibility;
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
        row.contest_name = resultSet.name;
        row.entry_fees = resultSet.entry_fees;
        row.description = resultSet.description;
        row.visibility = resultSet.visibility;
        return row;
    },
};