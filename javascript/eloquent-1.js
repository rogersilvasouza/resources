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
