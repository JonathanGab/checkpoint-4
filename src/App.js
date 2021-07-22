import './App.css';
import { ToastProvider } from 'react-toast-notifications';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <ToastProvider
        autoDismiss
        autoDismissTimeout={5000}
        placement="bottom-right"
      >
        <Header />
        <Main />
      </ToastProvider>
    </div>
  );
}

export default App;
