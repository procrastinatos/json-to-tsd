'use strict';

type Type = 'string' | 'number' | 'integer' | 'boolean' | 'array' | 'object' | 'null';

export abstract class Schema {
    id: string; // format: uri
    $schema: string; // format: uri
    type: Type | Type[]; // if array: minItems: 1, uniqueItems: true
    title: string;
    description: string;
    default: any; // should validate against the schema in which it resides, but that isn’t required
    enum: any[]; // minItems: 1, uniqueItems: true, should also be valid against the enclosing schema
    anyOf: Schema[]; // schemaArray
    allOf: Schema[]; // schemaArray
    oneOf: Schema[]; // schemaArray
    not: Schema;
    definitions: { [name: string]: Schema };
}

export class StringSchema extends Schema {
    minLength: number; // positiveIntegerDefault0
    maxLength: number; // positiveInteger
    pattern: string; // format: regex
    format: string; // date-time, email, hostname, ipv4, ipv6, uri
}

abstract class NumericalSchema extends Schema {
    multipleOf: number; // minimum: 0, exclusiveMinimum: true
    minimum: number;
    maximum: number;
    exclusiveMinimum: boolean; // default false
    exclusiveMaximum: boolean; // default false
}

export class NumberSchema extends NumericalSchema {
}

export class IntegerSchema extends NumericalSchema {
}

export class ObjectSchema extends Schema {
    properties: { [key: string]: Schema }; // default {}
    additionalProperties: boolean | Schema; // default {}
    patternProperties: { [regex: string]: Schema } // default {}
    required: string[]; // minItems: 1, uniqueItems: true
    minProperties: number; // positiveIntegerDefault0
    maxProperties: number; // positiveInteger
    dependencies: string[] | Schema; // stringArray or schema
}

export class ArraySchema extends Schema {
    items: Schema | Schema[]; // schema or schemaArray
    additionalItems: boolean | Schema; // default {}
    minItems: number; // positiveIntegerDefault0
    maxItems: number; // positiveInteger
    uniqueItems: boolean; // default false
}

export class BooleanSchema extends Schema {
}

export class NullSchema extends Schema {
}