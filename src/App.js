import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import PastryContainer from './components/PastryContainer';
import VanillaContainer from './components/VanillaContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer />    {/* Used Hooks instead of connect() */}
        <CakeContainer />      {/* Used connect method */}

        <IceCreamContainer/>
        <PastryContainer/>
        <VanillaContainer/>
      </div>
    </Provider>
  );
}

export default App;
