/*jslint sloppy:true, white:true, nomen:true, browser:true */
/*global $, console, alert */

    // 1 Modo
    var i = 1;

    for (var i = 1; i <= 100; i = i + 1) {

        if ((i % 3) === 0) {

            console.log('Fizz');

        } else if ((i % 5) === 0) {

            console.log('Buzz');

        } else {

            console.log(i);

        }

    }