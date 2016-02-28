var Stars = React.createClass({
  render: function() {
    return (
      <div>
      ...
      </div>
    );
  }
});

var Button = React.createClass({
  render: function() {
    return (
      <div>
      ...
      </div>
    );
  }
});

var AnswerFrame = React.createClass({
  render: function() {
    return (
      <div>
      ...
      </div>
    );
  }
});

var Game = React.createClass({
  render: function() {
    return (
      <div id="game">
        <h2>Play Nine</h2>
        < Stars />
        < Button />
        < AnswerFrame />
      </div>
    );
  }
});

React.render(
  < Game />,
  document.getElementById("container")
  );
