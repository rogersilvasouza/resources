/*jslint sloppy:true, white:true, nomen:true, browser:true */
/*global $, console, alert, prompt */

    // 1 Modo
    console.time('wayOfDoing1');

    var min = function(numberOne, numberTwo) {

        if (numberOne < numberTwo) {

            return numberOne;

        } if (numberTwo < numberOne) {

            return numberTwo;

        }

    };

    console.log(min(3, 5));

    console.timeEnd('wayOfDoing2');
