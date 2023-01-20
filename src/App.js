import { Toaster } from 'react-hot-toast';
import './App.css';
import DataForm from './components/DataForm/DataForm';

function App() {
  return (
    <div className="App">
      <DataForm></DataForm>
      <Toaster />
    </div>
  );
}

export default App;
