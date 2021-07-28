import { BrowserRouter } from 'react-router-dom'
import ProviderShop from './contexApi/providerShop'
import Routs from './pages/Routs'

function App() {
  return (
    <BrowserRouter>
      <ProviderShop>
        <Routs />
      </ProviderShop>
    </BrowserRouter>
  );
}

export default App;
