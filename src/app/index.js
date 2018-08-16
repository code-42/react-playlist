var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');

//Create a component
//var TodoComponent = React.createClass({
var TodoComponent = createReactClass({
    render: function() {
        return (
            <div>
                <h1> Hello there React world! </h1>
                <p>It works!</p>
            </div>
        );
    }
});

ReactDOM.render( <TodoComponent /> , document.getElementById('todo-wrapper'));
