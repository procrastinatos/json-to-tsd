'use strict';
require('mocha');
const chai_1 = require('chai');
const model_1 = require("../lib/model");
const builder_1 = require("../lib/builder");
describe('SchemaBuilder', function () {
    let builder;
    before(function () {
        builder = new builder_1.SchemaBuilder();
    });
    describe('#build(definition)', function () {
        context('with definition "type" property set to "null"', function () {
            it('should return an instance of NullSchema', function () {
                chai_1.expect(builder.build({
                    "type": "null"
                })).to.be.an.instanceOf(model_1.NullSchema);
            });
        });
        ;
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvYnVpbGRlci10ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUViLFFBQU8sT0FBTyxDQUFDLENBQUE7QUFDZix1QkFBcUIsTUFBTSxDQUFDLENBQUE7QUFDNUIsd0JBQXlCLGNBQWMsQ0FBQyxDQUFBO0FBQ3hDLDBCQUE0QixnQkFBZ0IsQ0FBQyxDQUFBO0FBRTdDLFFBQVEsQ0FBQyxlQUFlLEVBQUU7SUFDdEIsSUFBSSxPQUFzQixDQUFDO0lBRTNCLE1BQU0sQ0FBQztRQUNILE9BQU8sR0FBRyxJQUFJLHVCQUFhLEVBQUUsQ0FBQztJQUNsQyxDQUFDLENBQUMsQ0FBQztJQUVILFFBQVEsQ0FBQyxvQkFBb0IsRUFBRTtRQUMzQixPQUFPLENBQUMsK0NBQStDLEVBQUU7WUFDckQsRUFBRSxDQUFDLHlDQUF5QyxFQUFFO2dCQUMxQyxhQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztvQkFDakIsTUFBTSxFQUFFLE1BQU07aUJBQ2pCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxrQkFBVSxDQUFDLENBQUM7WUFDeEMsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztRQUNILENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6InRlc3QvYnVpbGRlci10ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJ21vY2hhJztcbmltcG9ydCB7ZXhwZWN0fSBmcm9tICdjaGFpJztcbmltcG9ydCB7TnVsbFNjaGVtYX0gZnJvbSBcIi4uL2xpYi9tb2RlbFwiO1xuaW1wb3J0IHtTY2hlbWFCdWlsZGVyfSBmcm9tIFwiLi4vbGliL2J1aWxkZXJcIjtcblxuZGVzY3JpYmUoJ1NjaGVtYUJ1aWxkZXInLCBmdW5jdGlvbigpIHtcbiAgICBsZXQgYnVpbGRlcjogU2NoZW1hQnVpbGRlcjtcblxuICAgIGJlZm9yZShmdW5jdGlvbigpIHtcbiAgICAgICAgYnVpbGRlciA9IG5ldyBTY2hlbWFCdWlsZGVyKCk7XG4gICAgfSk7XG5cbiAgICBkZXNjcmliZSgnI2J1aWxkKGRlZmluaXRpb24pJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnRleHQoJ3dpdGggZGVmaW5pdGlvbiBcInR5cGVcIiBwcm9wZXJ0eSBzZXQgdG8gXCJudWxsXCInLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGl0KCdzaG91bGQgcmV0dXJuIGFuIGluc3RhbmNlIG9mIE51bGxTY2hlbWEnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBleHBlY3QoYnVpbGRlci5idWlsZCh7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm51bGxcIlxuICAgICAgICAgICAgICAgIH0pKS50by5iZS5hbi5pbnN0YW5jZU9mKE51bGxTY2hlbWEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICA7XG4gICAgfSlcbn0pOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
