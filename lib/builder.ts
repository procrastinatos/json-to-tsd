'use strict';

import {Schema, StringSchema, NumberSchema, IntegerSchema, BooleanSchema, ArraySchema, ObjectSchema, NullSchema} from "./model";

export class Builder {
    private static SCHEMA_TYPES: { [name: string]: typeof Schema } = {
        'string': StringSchema,
        'number': NumberSchema,
        'integer': IntegerSchema,
        'boolean': BooleanSchema,
        'array': ArraySchema,
        'object': ObjectSchema,
        'null': NullSchema
    };

    build(jsonSchema: any): void {
        if (!jsonSchema) {
            throw new Error('No schema provided');
        }

        if (!jsonSchema.type) {
            throw new Error('Type inference not implemented');
        }

        if (!Builder.SCHEMA_TYPES[jsonSchema.type]) {
            throw new Error('Unsupported type ' + jsonSchema.type);
        }
    }
}