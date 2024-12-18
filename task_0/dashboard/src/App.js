import logo from './logo.jpg';
import './App.css';

const date = new Date();
let year = date.getFullYear();
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Logo" />
        <h1>School Dashboard</h1>
      </header>
	<hr />
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
	<hr />
	<div className="App-footer">
		<p>Copyright {year} - holberton School</p>
	</div>
    </div>
  );
}

export default App;


/**in task_0/dashboard/src/App.js, create a function App that returns:

a header div with a class named App-header containing the Holberton logo and a h1 with the text School dashboard
a body div with a class named App-body containing at least one paragraph with the text Login to access the full dashboard
a footer div with a class named App-footer containing at least one paragraph with the text Copyright 2020 - holberton School**/
