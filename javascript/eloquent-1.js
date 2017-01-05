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

        i = i + 1;
        tree += '#';

    }

    // 7 Modo
    for (i = 1; i <= 7; i = i + 1) {

        switch (i <= 7) {

            case i === 1:
              console.log('#');
              break;

            case i === 2:
                console.log('##');
                break;

            case i === 3:
                console.log('###');
                break;

            case i === 4:
                console.log('####');
                break;

            case i === 5:
                console.log('#####');
                break;

            case i === 6:
                console.log('######');
                break;

            case i === 7:
                console.log('########');
                break;

            default:
                console.log('#');
                break;

        }

    }

    // 8 Modo
