const head = require('lodash/head');
const isEmpty = require('lodash/isEmpty');

const { Employe } = include('models');

class EmployeesController {
    static async create(req, res, next) {
        try {
            const result = await Employe.insertOne(req.body);
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
            const employees = await Employe.find({
                skip,
                filter
            });
            // const [{count}] = await Employe.countDocuments();
            res.send({
                employees,
                total: 243,
                limit: parseInt(process.env.PAGE_SIZE)
            });
        } catch (err) {
            next(err);
        }
    }
    static async fetchOne(req, res, next) {
        try {
            const employe = await Employe.findById(req.params.id);

            if (isEmpty(employe)) {
                return res.status(404).send({ code: 'EMPLOYE_NOT_FOUND' });

            }

            res.send(head(employe));
        } catch (err) {
            next(err);
        }
    }
    static async save(req, res, next) {
        try {
            const result = await Employe.updateOne({ id: req.params.id }, req.body);
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
            const result = await Employe.deletedOne(req.params.id);
            res.send({
                success: true,
                result

            });

        } catch (err) {
            next(err);
        }
    }
}
module.exports = EmployeesController;
