var myTeacher = function(page, controller) {
    'use strict';

    var pageLength = page.length;
    var pathname = location.pathname.split('.jsp')[0];

    controller['common']();

    for (var i = 1; i <= pageLength - 1; i++) {
        if (pathname.indexOf(page[i].path) !== -1) {
            var controllerName = page[i].controller;

            controller[controllerName]();
        }
    }

};

var fn = (function() {
    'use strict';

    return {
        subjectiveDrag : function(){

        }
    };
})();
