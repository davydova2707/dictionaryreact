import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>
            Hosted with
            <a href="https://www.netlify.com">Netlify</a>
          </h1>
        </header>
        <main>
          <Dictionary defaultKeyword="code" />
        </main>
        <footer className="App-footer">
            <a href="https://github.com/davydova2707/dictionaryreact" target="_blank" rel="noreferrer">Open-source code</a> by Olena
        </footer>
      </div>
    </div>
  );
}
