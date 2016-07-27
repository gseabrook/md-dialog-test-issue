describe("Tests for component that opens select", function() {
    var element, compile, rootScope, mdDialog, material, rootElem;

    beforeEach(module('ngMaterial-mock'));
    beforeEach(module('test'));

    beforeEach(inject(function(_$rootScope_, _$compile_) {
        compile = _$compile_;
        rootScope = _$rootScope_;

        element = getCompiledElement();
    }));

    it("should open the select box", function() {
        var select = element.find('md-select');
        select.triggerHandler("click");
        var options = element.find('md-option');
        expect(options.length).toEqual(2);
    });

    function getCompiledElement() {
        var el = angular.element("<div select-test></div>");
        compile(el)(rootScope.$new());
        rootScope.$digest();
        return el;
    }
});

