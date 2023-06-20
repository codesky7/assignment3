function detectBrowser() {
  var browserName;
  var browserVersion;

  var userAgent = navigator.userAgent;
  var browserInfo = userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];

  if (/trident/i.test(browserInfo[1])) {
    browserName = 'IE';
    browserVersion = /\brv[ :]+(\d+)/g.exec(userAgent) || [];
    browserVersion = parseInt(browserVersion[1]) || '';
  }

  if (browserInfo[1] === 'Chrome') {
    var temp = userAgent.match(/\bOPR\/(\d+)/);
    if (temp !== null) {
      browserName = 'Opera';
      browserVersion = temp[1];
    }
  }

  browserInfo = browserInfo[2] ? [browserInfo[1], browserInfo[2]] : [navigator.appName, navigator.appVersion, '-?'];

  if (browserName === undefined) {
    browserName = browserInfo[0];
    browserVersion = browserInfo[1];
  }

  console.log('Browser: ' + browserName);
  console.log('Version: ' + browserVersion);
}

detectBrowser();
