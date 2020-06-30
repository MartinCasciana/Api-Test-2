require('../../src/global');

const {Company} = include('/models');
const companies = require('./companies.json');
exports.seed = async knex => {
    await knex(Company.tableName).del();
    try {
        // eslint-disable-next-line lodash/prefer-lodash-method
        return await Promise.all(companies.map(company => Company.insertOne(company))) ;
    } catch(err) {
        console.log('err: ', err);
    }
};
