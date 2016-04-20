import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class Vote extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  getPair() {
    return this.props.pair || [];
  }

  isDisabled() {
    return !!this.props.hasVoted;
  }

  hasVotedFor(entry) {
    return this.props.hasVoted === entry;
  }

  render() {
    return (
      <div className="voting">
        {this.getPair().map(entry =>
          <button key={entry}
            disabled={this.isDisabled()}
            onClick={() => this.props.vote(entry)}
          >
          <h1>{entry}</h1>
          {this.hasVotedFor(entry) ?
            <div className="label">Voted</div> :
            null}
          </button>
        )}
      </div>
    );
  }
}

Vote.propTypes = {
  pair: React.PropTypes.array,
  vote: React.PropTypes.function,
  hasVoted: React.PropTypes.string,
  winner: React.PropTypes.string,
};
export default Vote;
