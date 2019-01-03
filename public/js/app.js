var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');
//console.log(React);

var Hello = createReactClass({
    render: function () {
        //return React.createElement("h3",null ,"Hello WebPack!");
        return <h3>Hello JSX ?</h3>
    }
});


ReactDOM.render(<Hello/>,document.getElementById('react'));