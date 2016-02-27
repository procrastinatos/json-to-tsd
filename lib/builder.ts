'use strict';

import {Schema, StringSchema, NumberSchema, IntegerSchema, BooleanSchema, ArraySchema, ObjectSchema, NullSchema} from "./model";

interface Builder<S extends Schema> {
    build(definition: any): S;
}

export class SchemaBuilder implements Builder<Schema> {
    private static SCHEMA_TYPES: { [name: string]: typeof Schema } = {
        'string': StringSchema,
        'number': NumberSchema,
        'integer': IntegerSchema,
        'boolean': BooleanSchema,
        'array': ArraySchema,
        'object': ObjectSchema,
        'null': NullSchema
    };

    // TODO look into how feasible it would be to write a nice preconditions library using decorators
    build(definition: any): Schema {
        if (!definition) {
            throw new Error('No schema provided');
        }

        if (!definition['type']) {
            throw new Error('Type inference not implemented');
        }

        if (typeof definition.type !== 'string') {
            throw new Error('TODO array schema types');
        }

        if (!SchemaBuilder.SCHEMA_TYPES[definition.type]) {
            throw new Error('Unsupported type ' + definition.type);
        }

        return new NullSchemaBuilder().build(definition);
    }
}

class NullSchemaBuilder implements Builder<NullSchema> {
    build(definition: any) {
        return new NullSchema();
    }
}