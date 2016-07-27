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
    })
    .directive('selectTest', function() {
        return {
            restrict: 'A',
            template: '<md-select ng-model="model" placeholder="Test"><md-option ng-repeat="opt in options">{{opt.name}}</md-option></md-select>',
            link: function($scope) {
                $scope.options = [{
                    name: 'Download'
                }, {
                    name: 'Share'
                }];
            }
        }
    });