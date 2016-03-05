var StarsFrame = React.createClass({
  render: function() {

    var numberOfStars = Math.floor(Math.random)() *9) +1;
    var stars = [];

    for (var i=0; i< this.props.numberOfStars; i++){
      stars.push(
        <span className="glyphicon glyphicon-star"></span>
      )
    }
    return (
      <div id="stars-frame">
        <div className="well">
          {stars}
        </div>
      </div>
    );
  }
});

var Button = React.createClass({
  render: function() {
    var disabled, button, correct=this.props.correct;

    switch(correct) {
      case true:
        button = (
          <button className="btn btn-success btn-lrg">
            <span className="glyphicon glyphicon-ok">
            </span>
          </button>
        );
        break;

      case false:
        button = (
          <button className="btn btn-danger btn-lrg">
            <span className="glyphicon glyphicon-remove">
            </span>
          </button>
        );
        break;

      default:
        disabled = (this.props.selectedNumbers.length ===0);
        button = (
          <button className="btn btn-primary btn-lrg"
                  disabled={disabled}
                  onClick={this.props.checkAnswer}>
              =
              </button>
        );
    }


    return (
      <div id="button-frame">
        {button}
      </div>
    );
  }
});

var AnswerFrame = React.createClass({
  render: function() {
    var props = this.props;
    var selectedNumbers = props.selectedNumbers.map(function(i){

      return (
      <span onClick={props.unselectNumber.bind(null, i)}>
      {i}
      </span>
      )
    });

    return (
      <div id="answer-frame">
        <div className="well">
         {selectedNumbers}
        </div>
      </div>
    );
  }
});

var NumbersFrame = React.createClass({
  render: function() {

      var numbers = [], className,
        selectNumber=this.props.selectNumber;
        selectedNumbers=this.props.selectedNumbers;

      for (var i=1; i<=9; i++){
        className="number selected-" + (selectedNumbers.indexOf(i)>=0);
        numbers.push(
          <div className={className} onClick={selectNumber.bind(null, i)}>
          {i}
          </div>
        );
      }

    return(
      <div id="numbers-frame">
        <div className="well">
          {numbers}
        </div>
      </div>
    )
  }
})

var Game = React.createClass({
  getInitialState: function() {
    return {numberOfStars: Math.floor(Math.random()*9 +1),
            selectedNumbers: [],
            usedNumbers: [],
            correct: null
    }
  },

  selectNumber: function(clickedNumber) {
    if(this.state.selectedNumbers.indexOf(clickedNumber) < 0){
    this.setState(
    {selectedNumbers: this.state.selectedNumbers.concat(clickedNumber),
      correct: null}
    );
    }
  },

  unselectNumber: function(clickedNumber) {
    var selectedNumbers = this.state.selectedNumbers,
        indexOfNumber = selectedNumbers.indexOf(clickedNumber);

    selectedNumbers.splice(indexOfNumber, 1);

    this.setState({ selectedNumbers: selectedNumbers, correct: null })
  },

  sumOfSelectedNumbers: function() {
    return this.state.selectedNumbers.reduce(function (p,n){
      return p+n,
    }, 0)
  },

  checkAnswer: function() {
    var correct = this.state.numberOfStars === this.sumOfSelectedNumbers());
    this.setState({correct: correct});
  },

  acceptAnswer: function() {
    //used numbers

  },

  render: function() {
    var selectedNumbers = this.state.selectedNumbers;
    var numberOfStars = this.state.numberOfStars;
    var usedNumbers = this.state.usedNumbers;
    var correct = this.state.correct;

    return (
      <div id="game">
        <h2>Play Nine</h2>
        <hr/>
        <div className="clearfix">
            < Stars numberOfStars={numberOfStars} />
            < Button selectedNumbers={selectedNumbers}
                     correct={correct}
                     checkAnswer={this.checkAnswer} />
            < AnswerFrame selectedNumbers={selectedNumbers}
                          unselectedNumber={this.unselectedNumber} />
        </div>
            < NumbersFrame selectedNumbers={selectedNumbers}
                           selectNumber={this.selectNumber}
                           usedNumbers={this.usedNumbers} />
      </div>
    );
  }
});

React.render(
  < Game />,
  document.getElementById("container")
  );
