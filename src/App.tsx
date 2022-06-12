
import { useRoutes } from 'react-router-dom';
import routes from './router';

function App() {
  const elements = useRoutes(routes);
  return (
    <div className="app">
      { elements }
    </div>
  );
}

export default App;
