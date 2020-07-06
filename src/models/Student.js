const toNumber = require('lodash/toNumber');
const {PAGE_SIZE} = process.env;
const createModel = include('helpers/modelCreate');

const name = 'Student';
const tableName = 'student';

const selectableProps = [
    'name',
    'gender',
    'age',
    'email',
    'phone',
    'country',
    'city',
    'university',
    'job_title',
    'createdAt',
    'updatedAt',
    'deletedAt',
    '__v'
];

class StudentModel extends createModel {
    constructor(props) {
        super({
            ...props,
            name,
            tableName,
            selectableProps
        });
    }
}

module.exports = knex => new StudentModel({knex});
