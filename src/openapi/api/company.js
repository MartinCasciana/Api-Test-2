module.exports = {
    '/api/company': {
        get: {
            security: [],
            summary: 'List Company',
            parameters: [
                {
                    in: 'query',
                    name: 'industy',
                    schema: { type: 'string' },
                    description: 'Company industry '
                }, {
                    in: 'query',
                    name: 'name',
                    schema: { type: 'string' },
                    description: 'Name of the company'
                }, {
                    in: 'query',
                    name: 'symbol',
                    schema: { type: 'string' },
                    description: 'Symbol of the company'
                }, {
                    in: 'query',
                    name: 'sector',
                    schema: { type: 'string' },
                    description: 'Sector of the company' 
                }, {
                    in: 'query',
                    name: 'street_address',
                    schema: { type: 'string' },
                    description: 'Company address' 
                }, {
                    in: 'query',
                    name: 'city',
                    schema: { type: 'string' },
                    description: 'Company city' 
                }, {
                    in: 'query',
                    name: 'state',
                    schema: { type: 'string' },
                    description: 'Company state' 
                }, {
                    in: 'query',
                    name: 'phone',
                    schema: { type: 'string' },
                    description: 'Company phone' 
                }, {
                    in: 'query',
                    name: 'email',
                    schema: { type: 'string' },
                    description: 'Company email' 
                }, {
                    in: 'query',
                    name: 'market',
                    schema: { type: 'string' },
                    description: 'Company market' 
                }, {
                    in: 'query',
                    name: 'market_cap',
                    schema: { type: 'string' },
                    description: 'Market capital of the company' 
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
                    description: 'list of company',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                items: { $ref: '#/components/schemas/Company' }
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
                description: 'New Company',
                required: true,
                content: { 'application/ json': { schema: { $ref: '#/components/schemas/Company' } } }
            },
            responses: {
                200: {
                    description: 'list of company',
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
    '/api/company/{id}': {
        get: {
            security: [],
            summary: 'List company for ID',
            parameters: [{$ref: '#/components/parameters/Path'}],
            responses: {
                200: {
                    description: 'Company for ID',
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
                content: { 'application/ json': { schema: { $ref: '#/components/schemas/Company' } } }
            },
            responses: {
                200: {
                    description: 'list of company',
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
                    description: 'ID de la Compañía solicitada'
                }
            ],
            responses: {
                200: {
                    description: 'list of company',
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