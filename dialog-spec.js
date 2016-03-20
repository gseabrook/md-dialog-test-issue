describe("Tests for component that displays dialog", function() {
    var element, compile, rootScope, mdDialog, material;

    beforeEach(module('ngMaterial-mock'));
    beforeEach(module('test'));

    beforeEach(inject(function(_$rootScope_, _$compile_, $mdDialog, _$material_) {
        compile = _$compile_;
        rootScope = _$rootScope_;
        mdDialog = $mdDialog;
        material = _$material_;

        element = getCompiledElement();
    }));

    it("should open then close the dialog", function() {
        var controller = element.controller("dialogTest");

        expect(controller.dialogOpen).toEqual(undefined);

        expect(element.find('button').length).toEqual(1);
        element.find('button').triggerHandler('click');
        
        expect(controller.dialogOpen).toBeTruthy();

        rootScope.$apply();
        material.flushInterimElement();

        element.find('button').eq(2).triggerHandler('click');

        rootScope.$apply();
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

        rootScope.$apply();
        material.flushInterimElement();

        expect(showDialog).toBeTruthy();

        element.find('button').eq(2).triggerHandler('click');

        rootScope.$apply();
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