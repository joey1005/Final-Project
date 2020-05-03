

      const canvas1 = document.getElementById('c1');
      const context1 = canvas1.getContext('2d');

      let width1;
      let height1;

      let pxScale1 = window.devicePixelRatio;

      const image1 = document.getElementById('painting1');

      function setup1() {
        width1 = canvas1.width;
        height1 = canvas1.height;

        canvas1.style.width = width1 + 'px';
        canvas1.style.height = height1 + 'px';

        canvas1.width = width1 * pxScale1;
        canvas1.height = height1 * pxScale1;

        context1.scale(pxScale1, pxScale1);

        draw1();
      }

      function draw1() {
        context1.drawImage(image1, 0, 0, 200, 400);
      };

      window.addEventListener('load', setup1);



      const canvas2 = document.getElementById('c2');
      const context2 = canvas2.getContext('2d');

      let width2;
      let height2;

      let pxScale2 = window.devicePixelRatio;

      const image2 = document.getElementById('painting2');

      function setup2() {
        width2 = canvas2.width;
        height2 = canvas2.height;

        canvas2.style.width = width2 + 'px';
        canvas2.style.height = height2 + 'px';

        canvas2.width = width2 * pxScale2;
        canvas2.height = height2 * pxScale2;

        context2.scale(pxScale2, pxScale2);

        draw2();
      }

      function draw2() {
        context2.drawImage(image2, 0, 0, 200, 400);
      };

      window.addEventListener('load', setup2);



      const canvas3 = document.getElementById('c3');
      const context3 = canvas3.getContext('2d');

      let width3;
      let height3;

      let pxScale3 = window.devicePixelRatio;

      const image3 = document.getElementById('painting3');

      function setup3() {
        width3 = canvas3.width;
        height3 = canvas3.height;

        canvas3.style.width = width3 + 'px';
        canvas3.style.height = height3 + 'px';

        canvas3.width = width3 * pxScale3;
        canvas3.height = height3 * pxScale3;

        context3.scale(pxScale3, pxScale3);

        draw3();
      }

      function draw3() {
        context3.drawImage(image3, 0, 0, 200, 400);
      };

      window.addEventListener('load', setup3);
