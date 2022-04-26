import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import DataProvider from './components/pages/DataProvider';
import NotFound from './components/pages/NotFound';

const Home = lazy(() => import('./components/pages/Home'));
const Details = lazy(() => import('./components/pages/Details'));

const App: React.FC = () => {
  return (
    <div className="App" data-testid="app">
      <Suspense fallback={<p>Loading...</p>}>
        <BrowserRouter>
          <DataProvider>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/details" component={Details} />
              <Route exact path="*" component={NotFound} />
            </Switch>
          </DataProvider>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
