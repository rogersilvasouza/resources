/*jslint sloppy:true, white:true, nomen:true, browser:true */
/*global $, console, alert */

    // 1 Modo
    console.time('wayOfDoing1');
    var i = 1, j = 1, board = '';

    for (i = 1; i <= 8; i = i + 1) {

        if ((i % 2) === 1) {

            for (j = 1; j <= 8; j = j + 1) {

                if (((j % 2) === 1)) {

                    board += '#';

                } else {

                    board += ' ';

                }

            }

        } else {

            for (j = 1; j <= 8; j = j + 1) {

                if (((j % 2) === 1)) {

                    board += ' ';

                } else {

                    board += '#';

                }

            }

        }

        board += '\n';

    }

    console.log(board);
    console.timeEnd('wayOfDoing1');

    // 2 Modo
    console.time('wayOfDoing2');
    var i = 1, j = 1, board = '';

    for (i = 1; i <= 8; i = i + 1) {

        if ((i % 2) === 1) {

            for (j = 1; j <= 8; j = j + 1) {

                if (((j % 2) === 1)) {

                    board += '#';

                } else {

                    board += ' ';

                }

            }

        } else {

            for (j = 1; j <= 8; j = j + 1) {

                if (((j % 2) === 1)) {

                    board += ' ';

                } else {

                    board += '#';

                }

            }

        }

        board += '\n';

    }

    console.log(board);
    console.timeEnd('wayOfDoing2');
