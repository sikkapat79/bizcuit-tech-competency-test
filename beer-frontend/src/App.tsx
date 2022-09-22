import './App.css';
import Beer from './components/Beer';
import BeerContextProvider from './contexts/beer.context';

function App() {
  document.title = 'Random Beer';

  return (
    <BeerContextProvider>
      <main className='app'>
        <Beer />
      </main>
    </BeerContextProvider>
  );
}

export default App;
