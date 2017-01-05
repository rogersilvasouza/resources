/*jslint sloppy:true, white:true, nomen:true, browser:true */
/*global $, console, alert */

    var tree = '#', i = 1;

    for (i = 1; i <= 7; i = i + 1) {

        if (i === 1) {

            tree = tree;

        } else {

            tree += '#';

        }

        console.log(i + ' ' + tree);

    }

    tree = '';

    for (i = 1; i <= 7; i = i + 1) {

        tree += '#';

        console.log(i + ' ' + tree);

    }

    tree = '#';

    for (i = 1; i <= 7; i = i + 1) {

        console.log(i + ' ' + tree.repeat(i));

    }

    tree = '#', i = 1;

    do {

        console.log(i + ' ' + tree);

        i = i + 1;
        tree += '#';

    } while (i <= 7);

    tree = '#', i = 1;

    while (i <= 7) {

        console.log(i + ' ' + tree);

        tree += '#';
        i     = i + 1;

    }
