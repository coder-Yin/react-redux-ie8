require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');
require('babel-polyfill');

const React = require('react');
const ReactDom = require('react-dom');
const Container = require('./js/container');
const configureStore = require('./js/store');
const {Provider} = require('react-redux');
// import $ from 'zepto';

// const store = configureStore();

ReactDom.render(
    <Provider store={configureStore}>
        <Container />
    </Provider>,
    document.getElementById('root')
);


(function () {
    var documentElement = document.documentElement;
    //Use rem
    // documentElement.style.fontSize = documentElement.getBoundingClientRect().width / 10 + 'px';

})();
