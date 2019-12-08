import React, { Component } from 'react';
import Reader from './components/Reader/Reader/Reader';
import Dashboard from './components/BankAccount/Dashboard/Dashboard';
import publications from './components/Reader/publications.json';

class App extends Component {
  state = {
    transactions: [],
  };

  render() {
    return (
      <div className="App">
        <Reader items={publications} />
        <hr />
        <Dashboard />
      </div>
    );
  }
}

export default App;
