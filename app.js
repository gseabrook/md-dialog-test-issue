angular
    .module('test', ['ngMaterial'])
    .component('dialogTest', {
        template: '<button ng-click="showDialog()">Show Dialog</button>',
        controller: function($scope, $mdDialog) {
            var self = this;

            $scope.showDialog = function() {
                self.dialogOpen = true;

                var confirm = $mdDialog.confirm()
                    .title('Dialog title')
                    .ok('OK')
                    .cancel('Cancel');

                $mdDialog.show(confirm).then(function(result) {
                    self.dialogOpen = false;
                }, function() {
                    self.dialogOpen = false;
                });
            }
        }
    });