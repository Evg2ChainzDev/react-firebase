import './App.css';
import { AuthProvider } from './auth';

import LoginWrapper from './components/login-wrapper';

function App() {
  return (
    <div className="App">
      <LoginWrapper/>
      <AuthProvider />
    </div>
  );
}

export default App;
