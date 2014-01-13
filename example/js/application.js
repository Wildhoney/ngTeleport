!(function($angular) {

    var app = $angular.module('exampleApp', []);

    /**
     * @controller FirstController
     */
    app.controller('FirstController', function($scope) {

        $scope.moveAcross = function moveAcross(element) {
            alert(element);
        }

    });

    /**
     * @controller SecondController
     */
    app.controller('SecondController', function() {

    });

    /**
     * @directive button
     */
    app.directive('button', function move($window) {

        return {
            restrict: 'E',

            link: function link(scope, element, attributes) {

                element.bind('click', function onClick() {

                    var sourceContainer = element.parent(),
                        targetContainer = angular.element($window.document.querySelector('.second'));

                    teleport({
                        from: sourceContainer,
                        to: targetContainer
                    });

                });

            }
        }

    });

})(window.angular);