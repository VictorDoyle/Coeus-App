import logo from './logo.svg';
import 'semantic-ui-css/semantic.min.css'
import LandingPage from './pages/LandingPage'
import routes from './config/routes'

function App() {
  return (
    <div className="App">
     {/*  <LandingPage /> */}
      { routes }
    </div>
  );
}

export default App;
