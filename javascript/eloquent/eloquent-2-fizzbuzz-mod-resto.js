/*jslint sloppy:true, white:true, nomen:true, browser:true */
/*global $, console, alert */

    // 1 Modo 9.59ms
    console.time('wayOfDoing1');
    var i = 1;

    for (var i = 1; i <= 100; i = i + 1) {

        if ((i % 3) === 0) {

            console.log('FizzBuzz');

        } else if ((i % 5) === 0) {

            console.log('FizzBuzz');

        } else {

            console.log(i);

        }

    }
    console.timeEnd('wayOfDoing1');

    // 2 Modo 11ms
    console.time('wayOfDoing2');
    i = 1;

    while (i <= 100) {

      if ((i % 3) === 0) {

          console.log('FizzBuzz');

      } else if ((i % 5) === 0) {

          console.log('FizzBuzz');

      } else {

          console.log(i);

      }

      i = i + 1;

    }
    console.timeEnd('wayOfDoing2');

    // 3 Modo 9.65ms
    console.time('wayOfDoing3');
    i = 1;

    do {

        if ((i % 3) === 0) {

            console.log('FizzBuzz');

        } else if ((i % 5) === 0) {

            console.log('FizzBuzz');

        } else {

            console.log(i);

        }

        i = i + 1;

    } while (i <= 100);
    console.timeEnd('wayOfDoing3');

    // 4 Modo 8.89ms
    console.time('wayOfDoing4');
    var i = 1;

    for (var i = 1; i <= 100; i = i + 1) {

        if (((i % 3) === 0) || ((i % 5) === 0) ) {

            console.log('FizzBuzz');

        } else  {

            console.log('FizzBuzz');

        }

    }
    console.timeEnd('wayOfDoing4');
