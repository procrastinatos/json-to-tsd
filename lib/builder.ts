import {number} from "./decorators";
'use strict';

import {Schema, StringSchema, NumberSchema, IntegerSchema, BooleanSchema, ArraySchema, ObjectSchema, NullSchema} from "./model";

export class SchemaBuilder implements Schema {

}

export class StringSchemaBuilder extends SchemaBuilder implements StringSchema {
    @number
    minLength: any;
}

export class NullSchemaBuilder extends SchemaBuilder implements NullSchema {

}

export class BuilderException extends Error {
    private cause: Error;

    constructor(message: string, cause?: Error) {
        super(message);

        this.cause = cause;
    }
}

let s = new StringSchemaBuilder();
s.minLength = 1;

console.log(s.minLength);