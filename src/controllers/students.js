const {Student} = include('models');

class StudentsController {
    static async fetch(req, res, next) {
        try {
            const students = await Student.find(req.query);

            res.locals = {students};
            return next();
        } catch(err) {
            next(err);
        }
    }
}

module.exports = StudentsController;
