module.exports = {
    '/api/student': {
        get: {
            security: [],
            summary: 'List Student',
            parameters: [
                {
                    in: 'query',
                    name: 'name',
                    schema: { type: 'string' },
                    description: 'Name of the strudent '
                }, {
                    in: 'query',
                    name: 'gender',
                    schema: { type: 'string' },
                    description: 'Gender of the student'
                }, {
                    in: 'query',
                    name: 'age',
                    schema: { type: 'integer' },
                    description: 'Age of the student'
                }, {
                    in: 'query',
                    name: 'email',
                    schema: { type: 'string' },
                    description: 'Email of the student' 
                }, {
                    in: 'query',
                    name: 'phone',
                    schema: { type: 'string' },
                    description: 'phone of the student' 
                }, {
                    in: 'query',
                    name: 'country',
                    schema: { type: 'string' },
                    description: 'Student country' 
                }, {
                    in: 'query',
                    name: 'city',
                    schema: { type: 'string' },
                    description: 'Student city' 
                }, {
                    in: 'query',
                    name: 'university',
                    schema: { type: 'string' },
                    description: 'Student university' 
                }, {
                    in: 'query',
                    name: 'job_title',
                    schema: { type: 'string' },
                    description: 'Student title' 
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
                    description: 'list of student',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                items: { $ref: '#/components/schemas/Student' }
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
                description: 'New Student',
                required: true,
                content: { 'application/ json': { schema: { $ref: '#/components/schemas/Student' } } }
            },
            responses: {
                200: {
                    description: 'list of student',
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
    '/api/student/{id}': {
        get: {
            security: [],
            summary: 'List student for ID',
            parameters: [{$ref: '#/components/parameters/Path'}],
            responses: {
                200: {
                    description: 'Student for ID',
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
                content: { 'application/ json': { schema: { $ref: '#/components/schemas/Student' } } }
            },
            responses: {
                200: {
                    description: 'list of student',
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
                    description: 'ID del estudiante solicitado'
                }
            ],
            responses: {
                200: {
                    description: 'list of student',
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