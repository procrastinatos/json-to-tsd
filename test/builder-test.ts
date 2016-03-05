'use strict';

import 'mocha';
import {expect} from 'chai';
import {NullSchema} from "../lib/model";
import {SchemaBuilder} from "../lib/builder";

describe('SchemaBuilder', function() {
    let builder: SchemaBuilder;

    before(function() {
        builder = new SchemaBuilder();
    });

    describe('#build(definition)', function() {
        context('with definition "type" property set to "null"', function() {
            it('should return an instance of NullSchema', function() {
                //expect(builder.build({
                //    "type": "null"
                //})).to.be.an.instanceOf(NullSchema);
            });
        });
    })
});