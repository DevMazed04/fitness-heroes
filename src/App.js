import './App.css';
import Header from './components/Header/Header';
import Gym from './components/Gym/Gym';
import Questions from './components/Questions/Questions';

function App() {
  return (
    <div className='px-5'>
      <Header></Header>
      <Gym></Gym>
      <Questions></Questions>
    </div>
  );
}

export default App;
