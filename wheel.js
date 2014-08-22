/*
 *a simple sequence controller
 *param  Array
 */

var wheel = function (arr) {
    
    if (!arr || 0 === arr.length) { return; };

    setTimeout(function () {
        
        arr[0].callback();
        arr = arr.slice(1);
        wheel(arr);

    }, arr[0].timer);

}