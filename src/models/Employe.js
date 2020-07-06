const toNumber = require('lodash/toNumber');
const {PAGE_SIZE} = process.env;
const createModel = include('helpers/modelCreate');

const name = 'Employe';
const tableName = 'employe';

const selectableProps = [
    'name',
    'gender',
    'age',
    'email',
    'phone',
    'company_name',
    'sector',
    'createdAt',
    'updatedAt',
    'deletedAt',
    '__v'
];

class EmployeModel extends createModel {
    constructor(props) {
        super({
            ...props,
            name,
            tableName,
            selectableProps
        });
    }
}

module.exports = knex => new EmployeModel({knex});
