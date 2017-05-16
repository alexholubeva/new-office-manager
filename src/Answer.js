import React, { Component } from 'react';

class Answer extends Component {
  render() {
    return (
      <div>
        <p> {this.props.data.question} </p>
        <p> {this.props.data.answer} </p>
      </div>
    );
  }
}

Answer.propTypes = {
  data: React.PropTypes.object.isRequired,
};

export default Answer;
