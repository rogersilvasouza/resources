/*jslint sloppy:true, white:true, nomen:true, browser:true */
/*global $, console, alert */

    console.time('testeDeVelocidade');

    tree = '';

    for (i = 1; i <= 7; i = i + 1) {

        tree += '#';

        console.log(tree);

    }

    console.timeEnd('testeDeVelocidade');

    var t0, t1;

    t0 = performance.now();

    tree = '';

    for (i = 1; i <= 7; i = i + 1) {

        tree += '#';

        console.log(tree);

    }

    t1 = performance.now();

    console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");
