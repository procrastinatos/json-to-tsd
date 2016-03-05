'use strict';

import {Schema} from './model';

export class Parser {
    parse(definition: string): Schema | Schema[] {
        let json: any;

        try {
            json = JSON.parse(definition);
        } catch(e) {
            throw new ParserException('Error parsing JSON', e);
        }

        return null;
    }
}

export class ParserException extends Error {
    private cause: Error;

    constructor(message: string, cause?: Error) {
        super(message);

        this.cause = cause;
    }
}
