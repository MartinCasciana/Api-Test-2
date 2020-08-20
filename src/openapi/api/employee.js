module.exports = {
    '/api/employee': {
        get: {
            security: [],
            summary: 'List Employee',
            parameters: [
                {
                    in: 'query',
                    name: 'name',
                    schema: { type: 'string' },
                    description: 'Name of the employee '
                }, {
                    in: 'query',
                    name: 'gender',
                    schema: { type: 'string' },
                    description: 'Gender of the employee'
                }, {
                    in: 'query',
                    name: 'age',
                    schema: { type: 'integer' },
                    description: 'Age of the employee'
                }, {
                    in: 'query',
                    name: 'email',
                    schema: { type: 'string' },
                    description: 'Email of the employee' 
                }, {
                    in: 'query',
                    name: 'phone',
                    schema: { type: 'string' },
                    description: 'phone of the employee' 
                }, {
                    in: 'query',
                    name: 'company_name',
                    schema: { type: 'string' },
                    description: 'Name of the company where the employee works' 
                }, {
                    in: 'query',
                    name: 'sector',
                    schema: { type: 'string' },
                    description: 'Sector where the employee works' 
                }, {
                    in: 'query',
                    name: 'skip',
                    schema: {
                        type: 'integer',
                        default: 0
                    },
                    description: 'Numeric ID of user to get'
                }
            ],
            responses: {
                200: {
                    description: 'list of employee',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                items: { $ref: '#/components/schemas/Employee' }
                            }
                        }
                    }
                },
                default: {
                    description: 'Error',
                    content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } }
                }
            }
        },
        post: {
            security: [],
            requestBody: {
                description: 'New Employee',
                required: true,
                content: { 'application/ json': { schema: { $ref: '#/components/schemas/Employee' } } }
            },
            responses: {
                200: {
                    description: 'list of employee',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {}

                            }
                        }
                    }
                },
                default: {
                    description: 'Error',
                    content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } }
                }
            }
        }
    },
    '/api/employee/{id}': {
        get: {
            security: [],
            summary: 'List employee for ID',
            parameters: [{$ref: '#/components/parameters/Path'}],
            responses: {
                200: {
                    description: 'Employee for ID',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {}
                            }
                        }
                    }
                },
                default: {
                    description: 'Error',
                    content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } }
                }
            }
        },
        put: {
            security: [],
            parameters: [{ $ref: '#/components/parameters/Path' }],
            requestBody: {
                description: 'Optional description',
                required: true,
                content: { 'application/ json': { schema: { $ref: '#/components/schemas/Employee' } } }
            },
            responses: {
                200: {
                    description: 'list of employee',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {}

                            }
                        }
                    }
                },
                default: {
                    description: 'Error',
                    content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } }
                }
            }
        },
        delete: {
            security: [],
            parameters: [
                {
                    in: 'path',
                    name: 'id',
                    schema: {
                        type: 'string',
                        format: 'uuid'
                    },
                    required: true,
                    description: 'ID del empleado solicitado'
                }
            ],
            responses: {
                200: {
                    description: 'list of employee',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {}
                            }
                        }
                    }
                },
                default: {
                    description: 'Error',
                    content: { 'application/json': { schema: { $ref: '#/components/schemas/Error' } } }
                }
            }
        }
    }
};