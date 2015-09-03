/* Services */

(function () {
    "use strict";

    angular
        .module('services', ['ngResource'])


        /*  CALLING MARVEL API  */

        .factory('apiServices', ['$resource',
            function ($resource) {
                return {
                    getApi: function() {
                        return $resource(
                            'http://gateway.marvel.com/v1/public/characters?apikey=1098c619ddb1b056e3d4fff799b7c4ef&hash=3ce678851c32e27213fd5bafe249d0dc&ts=1435094344'
                        )
                    }
                };
            }

    ])


})();








