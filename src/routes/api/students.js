const {
    StudentsController, StatesController
} = include('controllers');

module.exports = router => {
    router.get('/', StudentsController.fetch, StatesController.fetch);
    return router;
};
