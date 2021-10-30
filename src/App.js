import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import PicsOperations from './redux/pictures/operations';
import PictureList from './components/PictureList';
import PictureDetails from './components/PictureDetails';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(PicsOperations());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact>
            <PictureList />
          </Route>
          <Route
            path='/:picId'
            component={() => <PictureDetails key={window.location.pathname} />}
          />
          <Redirect to='/' />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
