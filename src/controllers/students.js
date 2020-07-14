const head = require('lodash/head');
const isEmpty = require('lodash/isEmpty');

const { Student } = include('models');

class StudentsController {
    static async create(req, res, next) {
        try {
            const result = await Student.insertOne(req.body);
            res.send({
                success: true,
                result
            });
        } catch (err) {
            next(err);
        }
    }
    static async fetch(req, res, next) {
        try {
            console.log(req.query);
            const {
                skip, ...filter
            } = req.query;
            const students = await Student.find({
                skip,
                filter
            });
            // const [{count}] = await Student.countDocuments();
            res.send({
                students,
                total: 243,
                limit: parseInt(process.env.PAGE_SIZE)
            });
        } catch (err) {
            next(err);
        }
    }
    static async fetchOne(req, res, next) {
        try {
            const student = await Student.findById(req.params.id);

            if (isEmpty(student)) {
                return res.status(404).send({ code: 'STUDENT_NOT_FOUND' });

            }

            res.send(head(student));
        } catch (err) {
            next(err);
        }
    }
    static async save(req, res, next) {
        try {
            const result = await Student.updateOne({ id: req.params.id }, req.body);
            res.send({
                success: true,
                result
            });
        } catch (err) {
            next(err);
        }
    }
    static async delete(req, res, next) {
        try {
            const result = await Student.deletedOne(req.params.id);
            res.send({
                success: true,
                result

            });

        } catch (err) {
            next(err);
        }
    }
}
module.exports = StudentsController;
