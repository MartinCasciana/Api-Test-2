const { CompaniesController } = include('controllers');

module.exports = router => {
    router.route('/')
        .get(CompaniesController.fetch)
        .post(CompaniesController.create);
    router.route('/:id')
        .put(CompaniesController.save)
        .delete(CompaniesController.delete)
        .get(CompaniesController.fetchOne);
    return router;
};
