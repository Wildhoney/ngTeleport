(function($angular) {

    "use strict";

    /**
     * @property teleportable
     * @type {Object}
     * @private
     */
    var _teleportable = {};

    /**
     * @module ngTeleport
     * @author Adam Timberlake
     */
    var ngTeleport = $angular.module('ngTeleport', []);

    /**
     * @directive ngTeleport
     * @return {Object}
     */
    ngTeleport.directive('ngTeleport', function teleportDirective() {

        return {
            restrict: 'EA',

            link: function(scope, element, attributes) {

                var reference = attributes.ngTeleport;

                if (!reference) {
                    // Ensure the developer has defined a unique identifier on the `ngTeleport` attribute.
                    throw 'Attribute `ngTeleport` requires a unique name per scope.';
                }

                if (_teleportable[reference + scope.$id]) {
                    // Don't continue if we already have this element.
                    return;
                }

                // Update the `_teleportable` if we don't already have it from the service below.
                _teleportable[reference + scope.$id] = element.wrap('<p/>').parent().html();

            }
        }

    });

    /**
     * @service teleport
     * @param $compile {Function}
     * @param $interpolate {Function}
     * @return {Function}
     */
    ngTeleport.service('teleport', ['$compile', '$interpolate', function teleportService($compile, $interpolate) {

        return function (sourceContainer, targetContainer, options) {

            // Determine whether we should inherit the scope or not.
            var inheritScope = (options && options.retainScope);

            var scope        = (inheritScope) ? sourceContainer.scope() : targetContainer.scope(),
                reference    = sourceContainer.attr('ng-teleport'),
                html         = _teleportable[reference + sourceContainer.scope().$id],
                interpolated = $interpolate(html)(scope),
                element      = angular.element(interpolated),
                compiled     = $compile(element)(scope);

            // Update the `_teleportable` to include this one.
            _teleportable[reference + scope.$id] = html;

            if (!options || (options.duplicate || false) === false) {
                sourceContainer.remove();
            }

            targetContainer[options && options.insertion || 'append'](compiled);

        };

    }]);

})(window.angular);