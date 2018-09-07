import * as React from 'react';
import './styling/app.css';
import Hello from './components/helloWorld'

class App extends React.Component {

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Get busy with Widgets for React</h1>
        </header>
          <Hello />
      
      </div>
    );
  }
}

export default App;
