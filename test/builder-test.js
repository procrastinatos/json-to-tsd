'use strict';
require('mocha');
const builder_1 = require("../lib/builder");
describe('SchemaBuilder', function () {
    let builder;
    before(function () {
        builder = new builder_1.SchemaBuilder();
    });
    describe('#build(definition)', function () {
        context('with definition "type" property set to "null"', function () {
            it('should return an instance of NullSchema', function () {
                //expect(builder.build({
                //    "type": "null"
                //})).to.be.an.instanceOf(NullSchema);
            });
        });
    });
});
//# sourceMappingURL=builder-test.js.map