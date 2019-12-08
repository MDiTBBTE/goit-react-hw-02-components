import React, { Component } from 'react';
import Publication from '../Publication/Publication';
import Counter from '../Counter/Counter';
import Controls from '../Controls/Controls';
import styles from './Reader.module.css';

class Reader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialValue: 1,
    };
  }

  handleIncrement = e => {
    this.state.initialValue < 10 &&
      this.setState(prevState => ({
        initialValue: prevState.initialValue + 1,
      }));
  };

  handleDecrement = e => {
    this.state.initialValue > 1 &&
      this.setState(prevState => ({
        initialValue: prevState.initialValue - 1,
      }));
  };

  render() {
    return (
      <div className={styles.reader}>
        <Publication
          items={this.props.items}
          pageNum={this.state.initialValue}
        />
        <Counter pageNum={this.state.initialValue} />
        <Controls
          pageNum={this.state.initialValue}
          onClickDecrement={this.handleDecrement}
          onClickIncrement={this.handleIncrement}
        />
      </div>
    );
  }
}

export default Reader;
