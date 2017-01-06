/*jslint sloppy:true, white:true, nomen:true, browser:true */
/*global $, console, alert */

    // Primeiro exercício do eloquent Javascript
    var tree = '#', i = 1;

    // Best way
    for (i = 1; i <= 7; i = i + 1) {

        tree += '#';

        console.log(tree);

    }

    // 1 Modo
    console.time('wayOfDoing1');
    console.log('#');
    console.log('##');
    console.log('###');
    console.log('####');
    console.log('#####');
    console.log('######');
    console.log('#######');
    console.timeEnd('wayOfDoing1');

    // 2 Modo
    console.time('wayOfDoing2');
    tree = '#'; i = 1;

    for (i = 1; i <= 7; i = i + 1) {

        if (i !== 1) {

            tree += '#';

        }

        console.log(tree);

    }
    console.timeEnd('wayOfDoing2');

    // 3 Modo
    console.time('wayOfDoing3');
    tree = '';

    for (i = 1; i <= 7; i = i + 1) {

        tree += '#';

        console.log(tree);

    }
    console.timeEnd('wayOfDoing3');

    // 4 Modo
    console.time('wayOfDoing4');
    tree = '#';

    for (i = 1; i <= 7; i = i + 1) {

        console.log(tree.repeat(i));

    }
    console.timeEnd('wayOfDoing4');

    // 5 Modo
    console.time('wayOfDoing5');
    tree = '#'; i = 1;

    do {

        console.log(tree);

        i = i + 1;
        tree += '#';

    } while (i <= 7);
    console.timeEnd('wayOfDoing5');

    // 6 Modo
    console.time('wayOfDoing6');
    tree = '#'; i = 1;

    while (i <= 7) {

        console.log(tree);

        i = i + 1;
        tree += '#';

    }
    console.timeEnd('wayOfDoing6');

    // 7 Modo
    console.time('wayOfDoing7');
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
    console.timeEnd('wayOfDoing7');
