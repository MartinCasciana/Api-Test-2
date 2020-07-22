module.exports = {
    schemas: {
        ArrayString: {
            type: 'array',
            uniqueItems: true,
            items: {type: 'string'}
        },
        ArrayNumber: {
            type: 'array',
            uniqueItems: true,
            items: {type: 'integer'}
        },
        Role: {
            type: 'object',
            properties: {
                id: {type: 'string'},
                name: {type: 'string'},
                order: {type: 'integer'}
            }
        },
        ids: {
            type: 'array',
            uniqueItems: true,
            items: {
                type: 'string',
                format: 'uuid'
            }
        },
        Persons: {
            type: 'object',
            properties: {
                id: {
                    type: 'string',
                    format: 'uuid',
                    nullable: true
                },
                name: {type: 'string'},
                surname: {type: 'string'},
                email: {
                    type: 'string',
                    format: 'email'
                },
                gender: {type: 'string'},
                avatar: {type: 'string'}
            }
        },
        Country: {
            type: 'object',
            properties: {
                id: {
                    type: 'string',
                    format: 'uuid',
                    nullable: true
                },
                name: {
                    description: 'Name.',
                    type: 'string'
                },
                code: {
                    description: 'Code.',
                    type: 'string'
                }
            }
        },
        Company: {
            type: 'object',
            properties: {
                id: {
                    type: 'string',
                    format: 'uuid',
                    nullable: true
                },
                industry: {
                    description: 'Industry.',
                    type: 'string'
                },
                name: {
                    description: 'Name.',
                    type: 'string'
                },
                symbol: {
                    description: 'Symbol.',
                    type: 'string'
                },
                sector: {
                    description: 'Sector.',
                    type: 'string'
                },
                street_address: {
                    description: 'Street_address.',
                    type: 'string'
                },
                city: {
                    description: 'City.',
                    type: 'string'
                },
                state: {
                    description: 'State.',
                    type: 'string'
                },
                phone: {
                    description: 'Phone.',
                    type: 'string'
                },
                email: {
                    description: 'Email.',
                    type: 'string'
                },
                market: {
                    description: 'Market.',
                    type: 'string'
                },
                market_cap: {
                    description: 'Market_cap.',
                    type: 'string'
                }
            }
        },
        Employe: {
            type: 'object',
            properties: {
                id: {
                    type: 'string',
                    format: 'uuid',
                    nullable: true
                },
                name: {
                    description: 'Name.',
                    type: 'string'
                },
                gender: {
                    description: 'Gender.',
                    type: 'string'
                },
                age: {
                    description: 'Age.',
                    type: 'integer'
                },
                email: {
                    description: 'Email.',
                    type: 'string'
                },
                phone: {
                    description: 'Phone.',
                    type: 'string'
                },
                company_name: {
                    description: 'Company_name.',
                    type: 'string'
                },
                sector: {
                    description: 'Sector.',
                    type: 'string'
                }
            }
        },
        Student: {
            type: 'object',
            properties: {
                id: {
                    type: 'string',
                    format: 'uuid',
                    nullable: true
                },
                name: {
                    description: 'Name.',
                    type: 'string'
                },
                gender: {
                    description: 'Gender.',
                    type: 'string'
                },
                age: {
                    description: 'Age.',
                    type: 'integer'
                },
                email: {
                    description: 'Email.',
                    type: 'string'
                },
                phone: {
                    description: 'Phone.',
                    type: 'string'
                },
                country: {
                    description: 'Country.',
                    type: 'string'
                },
                city: {
                    description: 'City.',
                    type: 'string'
                },
                university: {
                    description: 'University.',
                    type: 'string'
                },
                job_title: {
                    description: 'Job_title.',
                    type: 'string'
                }
            }
        },
        parameters: {
            Path: {
                name: 'id',
                in: 'path',
                required: true,
                schema: {
                    type: 'string',
                    format: 'uuid'
                },
                description: 'ID'
            }
        },
        Error: {
            type: 'object',
            required: [
                'code',
                'message'
            ],
            properties: {
                code: {
                    type: 'integer',
                    format: 'int32'
                },
                message: {type: 'string'}
            }
        }
    },
    securitySchemes: {
        bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT'
        }
    }
};
