import Routes from "./Routes";
import {GlobalStyle} from './style/global'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <ToastContainer/>
      <Routes/>
    </div>
  );
}

export default App;
