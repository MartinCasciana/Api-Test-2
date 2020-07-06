const toNumber = require('lodash/toNumber');
const {PAGE_SIZE} = process.env;
const createModel = include('helpers/modelCreate');

const name = 'Company';
const tableName = 'company';

const selectableProps = [
    'industry',
    'name',
    'symbol',
    'sector',
    'street_address',
    'city',
    'state',
    'phone',
    'email',
    'market',
    'market_cap',
    'createdAt',
    'updatedAt',
    'deletedAt',
    '__v'
];

class CompanyModel extends createModel {
    constructor(props) {
        super({
            ...props,
            name,
            tableName,
            selectableProps
        });
    }
}

module.exports = knex => new CompanyModel({knex});
