import Header from './components/Header/index';
import Main from './components/Main/index';
import Footer from './components/Footer/index';

import './App.module.scss';

const App = () => {
  return (
    <div className="App">
        <Header />
        <Main />
        <Footer />
    </div>
  );
}

export default App;
