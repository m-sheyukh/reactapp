import logo from './logo.svg';
import './App.css';
import Card from './Card'

function App() {
  return (
    <div className="App">
      <Card title="Article 1" body="this is article 1" />
      <Card title="Article 2" body="this is article 2" />
      <Card title="Article 3" body="this is article 3" />
    </div>
  );
}

export default App;
