require('../../src/global');

const {Student} = include('/models');
const students = require('./students.json');
exports.seed = async knex => {
    await knex(Student.tableName).del();
    try {
        // eslint-disable-next-line lodash/prefer-lodash-method
        return await Promise.all(students.map(student => Student.insertOne(student))) ;
    } catch(err) {
        console.log('err: ', err);
    }
};
