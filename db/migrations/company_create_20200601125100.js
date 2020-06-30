exports.up = function(knex) {
    return knex.schema
        .createTable('company', function (table) {
            table.string('id');
            table.string('industry', 255);
            table.string('name', 255);
            table.string('symbol', 255);
            table.string('sector', 255);
            table.string('street_address', 255);
            table.string('city', 255);
            table.string('state', 255);
            table.integer('phone', 255);
            table.string('email', 255);
            table.string('market', 255);
            table.string('market_cap', 255);
            table.boolean('deleted');
            table.timestamp('createdAt');
            table.timestamp('updatedAt');
            table.timestamp('deletedAt');
            table.integer('__v');
        });
};

exports.down = function(knex) {
    return knex.schema
        .dropTable('products');
};
