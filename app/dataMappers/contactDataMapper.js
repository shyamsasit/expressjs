/**
 * Contact Data Mapper
 * @exports Contact/DataMapper
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
        search.sort_field = (!requestData.sort_field) ? 'contact_name' : requestData.sort_field;
        return search;
    },

    /**
     * Data Mapping for Add functionality
     * @param {Object} contact - Data Schema Object
     * @param {Object} requestData - Request Body Object
     * @return {Object} Updated contact object
     */
    addData: function (contact, requestData) {
        contact.contact_name = requestData.contact_name;
        contact.message = requestData.message;
        contact.contact_email = requestData.contact_email;
        contact.subject = requestData.subject;
        return contact;
    },

    /**
     * Data Mapping for Edit functionality
     * @param {Object} contact - Data Schema Object
     * @param {Object} requestData - Request Body Object
     * @return {Object} Updated contact object
     */
    editData: function (contact, requestData) {
        return this.addData(contact, requestData);
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
            row.contact_name = resultSet[i].name;
            row.message = resultSet[i].message;
            row.contact_email = resultSet[i].contact_email;
            row.subject = resultSet[i].subject;
            row.date = resultSet[i].date;
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
        row.contact_name = resultSet.name;
        row.message = resultSet.message;
        row.contact_email = resultSet.contact_email;
        row.subject = resultSet.subject;
        row.date = resultSet.date;
        return row;
    },
};