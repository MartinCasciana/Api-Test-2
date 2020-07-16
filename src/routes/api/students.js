const { StudentsController } = include('controllers');

module.exports = router => {
    router.route('/')
        .get(StudentsController.fetch)
        .post(StudentsController.create);
    router.route('/:id')
        .put(StudentsController.save)
        .delete(StudentsController.delete)
        .get(StudentsController.fetchOne);
    return router;
};
