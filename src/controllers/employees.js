const {Employe} = include('models');

class EmployeesController {
    static async fetch(req, res, next) {
        try {
            const employees = await Employe.find(req.query);

            res.locals = {employees};
            return next();
        } catch(err) {
            next(err);
        }
    }
}

module.exports = EmployeesController;
