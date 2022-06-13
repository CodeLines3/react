
import { useRoutes } from 'react-router-dom';
import routes from './router';

function App() {
  console.log('app')
  const elements = useRoutes(routes);
  return (
    <>
      { elements }
    </>
  );
}

export default App;
