      function detectIE() {
          var ua = window.navigator.userAgent;
          var msie = ua.indexOf('MSIE ');
          if (msie > 0) {
              // IE 10 or older => return version number
              return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
          }
          var trident = ua.indexOf('Trident/');
          if (trident > 0) {
              // IE 11 => return version number
              var rv = ua.indexOf('rv:');
              return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
          }
          var edge = ua.indexOf('Edge/');
          if (edge > 0) {
              // Edge (IE 12+) => return version number
              return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
          }
          // other browser
          return false;
      }

      window.onload = function() {
          var ieVersion = detectIE();
          if (ieVersion && ieVersion < 11) { // 这里指定要检测的IE版本
              alert("您正在使用的IE浏览器版本过低，请升级您的浏览器以获得更好的体验。");
          }
      };
