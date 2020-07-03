const {Company} = include('models');

class CompaniesController {
    static async fetch(req, res, next) {
        try {
            const companies = await Company.find(req.query);

            res.locals = {companies};
            return next();
        } catch(err) {
            next(err);
        }
    }
}

module.exports = CompaniesController;
