import { RouteList } from './routes/RouteList';
import { GlobalContainer } from './styles/global'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
  
    <BrowserRouter>
      <RouteList />
      <GlobalContainer />
    </BrowserRouter>

  );
}

export default App;
