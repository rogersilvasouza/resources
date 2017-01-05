/*jslint sloppy:true, white:true, nomen:true, browser:true */
/*global $, console, alert */

    // 1 Modo
    console.log('#');
    console.log('##');
    console.log('###');
    console.log('####');
    console.log('#####');
    console.log('######');
    console.log('#######');

    // 2 Modo
    var tree = '#', i = 1;

    for (i = 1; i <= 7; i = i + 1) {

        if (i === 1) {

            tree = tree;

        } else {

            tree += '#';

        }

        console.log(tree);

    }

    // 3 Modo
    tree = '';

    for (i = 1; i <= 7; i = i + 1) {

        tree += '#';

        console.log(tree);

    }

    // 4 Modo
    tree = '#';

    for (i = 1; i <= 7; i = i + 1) {

        console.log(tree.repeat(i));

    }

    // 5 Modo
    tree = '#', i = 1;

    do {

        console.log(tree);

        i = i + 1;
        tree += '#';

    } while (i <= 7);

    // 6 Modo
    tree = '#', i = 1;

    while (i <= 7) {

        console.log(tree);

        tree += '#';
        i     = i + 1;

    }

    // 7 Modo
