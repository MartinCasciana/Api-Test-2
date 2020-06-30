exports.up = function(knex) {
    return knex.schema
        .createTable('student', function (table) {
            table.string('id');
            table.string('name', 255);
            table.string('gender', 255);
            table.integer('age', 2);
            table.string('email', 255);
            table.integer('phone', 255);
            table.string('country', 255);
            table.string('city', 255);
            table.string('university', 255);
            table.string('job_title', 255);
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
