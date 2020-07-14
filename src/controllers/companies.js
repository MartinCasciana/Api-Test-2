const head = require('lodash/head');
const isEmpty = require('lodash/isEmpty');

const { Company } = include('models');

class CompaniesController {
    static async create(req, res, next) {
        try {
            const result = await Company.insertOne(req.body);
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
            const companies = await Company.find({
                skip,
                filter
            });
            // const [{count}] = await Company.countDocuments();
            res.send({
                companies,
                total: 243,
                limit: parseInt(process.env.PAGE_SIZE)
            });
        } catch (err) {
            next(err);
        }
    }
    static async fetchOne(req, res, next) {
        try {
            const company = await Company.findById(req.params.id);

            if (isEmpty(company)) {
                return res.status(404).send({ code: 'COMPANY_NOT_FOUND' });

            }

            res.send(head(company));
        } catch (err) {
            next(err);
        }
    }
    static async save(req, res, next) {
        try {
            const result = await Company.updateOne({ id: req.params.id }, req.body);
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
            const result = await Company.deletedOne(req.params.id);
            res.send({
                success: true,
                result

            });

        } catch (err) {
            next(err);
        }
    }
}
module.exports = CompaniesController;
