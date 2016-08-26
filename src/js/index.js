'use strict';

function getDomContentLoaded(timing) {
    var complete = timing.domComplete - timing.domContentLoadedEventStart;

    console.log('Load time: ' + complete + 'ms');
}

function initChecks() {
    var timing = (window.performance && window.performance.timing) ? window.performance.timing : {};
    console.log(timing);
    getDomContentLoaded(timing);
}

window.onload = initChecks;
