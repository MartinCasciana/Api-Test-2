const {
    CompaniesController, StatesController
} = include('controllers');

module.exports = router => {
    router.get('/', CompaniesController.fetch, StatesController.fetch);
    return router;
};
