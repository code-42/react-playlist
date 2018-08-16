var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');

//Create a component
//var TodoComponent = React.createClass({
var TodoComponent = createReactClass({
    render: function() {
        return ( 
            <h1> Hello there React world! It works!</h1>
        );
    }
});

ReactDOM.render( <TodoComponent /> , document.getElementById('todo-wrapper'));
