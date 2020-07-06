const {
    EmployeesController, StatesController
} = include('controllers');

module.exports = router => {
    router.get('/', EmployeesController.fetch, StatesController.fetch);
    return router;
};
