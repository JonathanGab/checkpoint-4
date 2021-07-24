import './App.css';
import './components/button.css';
import { ToastContainer } from 'react-toastify';
import { injectStyle } from 'react-toastify/dist/inject-style';
import Header from './components/Header';
import Main from './components/Main';

if (typeof window !== 'undefined') {
  injectStyle();
}

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Header />
      <Main />
    </div>
  );
}

export default App;
