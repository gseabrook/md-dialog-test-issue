describe("Tests for component that displays dialog", function() {
    var element, compile, rootScope, mdDialog, material, rootElem;

    beforeEach(module('ngMaterial-mock'));
    beforeEach(module('test'));

    beforeEach(module(function($provide) {
        rootElem = angular.element("<div></div>")
        $provide.value('$rootElement', rootElem);
    }));

    beforeEach(inject(function(_$rootScope_, _$compile_, $mdDialog, _$material_) {
        compile = _$compile_;
        rootScope = _$rootScope_;
        mdDialog = $mdDialog;
        material = _$material_;

        element = getCompiledElement();
        angular.element(window.document.body).append(rootElem);
        angular.element(rootElem).append(element);
    }));

    it("should open then close the dialog", function() {
        var controller = element.controller("dialogTest");

        expect(controller.dialogOpen).toEqual(undefined);

        expect(element.find('button').length).toEqual(1);
        element.find('button').triggerHandler('click');

        expect(rootElem.find('md-dialog').length).toEqual(1);
        expect(controller.dialogOpen).toBeTruthy();

        rootElem.find('button').eq(2).triggerHandler('click');

        material.flushInterimElement();

        expect(controller.dialogOpen).toBeFalsy();
    });

    it("works fine opening the dialog from the test", function() {
        var showDialog = true;

        var confirm = mdDialog.confirm()
            .parent(element)
            .title('Dialog title')
            .ok('OK')
            .cancel('Cancel');

        mdDialog.show(confirm).then(function(result) {
            showDialog = false;
        }, function() {
            showDialog = false;
        });

        material.flushInterimElement();

        expect(showDialog).toBeTruthy();
        expect(element.find('md-dialog').length).toEqual(1);

        element.find('button').eq(2).triggerHandler('click');

        material.flushInterimElement();

        expect(showDialog).toBeFalsy();
    });

    function getCompiledElement() {
        var el = angular.element("<dialog-test></dialog-test>");
        compile(el)(rootScope.$new());
        rootScope.$digest();
        return el;
    }
});