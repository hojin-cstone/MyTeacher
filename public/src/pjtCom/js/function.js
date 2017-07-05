/**
 * --------------------------------
 * function
 * --------------------------------
 */
var myTeacher = function(page, controller) {
    'use strict';

    var pageLength = page.length;
    var pathname = location.pathname.split('.jsp')[0];

    console.time("common");
    controller['common']();
    console.timeEnd("common");

    for (var i = 1; i <= pageLength - 1; i++) {
        if (pathname.indexOf(page[i].path) !== -1) {
            var controllerName = page[i].controller;
            console.time(controllerName);
            controller[controllerName]();
            console.timeEnd(controllerName);
        }
    }

};

var fn = (function() {
    'use strict';

    return {


        }

    };
})();
