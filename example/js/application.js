!(function($angular) {

    var app = $angular.module('exampleApp', ['ngTeleport']);

    /**
     * @controller FirstController
     */
    app.controller('FirstController', function($scope) {

        $scope.name = 'First';

    });

    /**
     * @controller SecondController
     */
    app.controller('SecondController', function($scope) {

        $scope.name = 'Second';

    });

    /**
     * @directive button
     */
    app.directive('button', function move($window, teleport, $templateCache) {

        return {
            restrict: 'E',

            link: function link(scope, element) {

                element.bind('click', function onClick() {

                    var className = (element.closest('.scope').hasClass('second') ? '.first' : '.second');

                    var source = element.parent(),
                        target = angular.element($window.document.querySelector(className));

                    teleport(source, target, {
                        duplicate: true,
                        retainScope: false
                    });

                });

            }
        }

    });

})(window.angular);