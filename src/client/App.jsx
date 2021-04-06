import React from 'react';
import { Route, Switch } from 'react-router-dom'

import * as Modules from './modules'

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Modules.Home} />
      <Route path="/quiz" component={Modules.Quiz} />
      <Route path="/auth/signin" component={() => <Modules.Auth signin={true} />} />
      <Route path="/auth/signup" component={() => <Modules.Auth signin={false} />} />


      {/* <Route path="/quiz/:id?" component={() => <Modules.Post key={window.location.pathname}/>} /> */}
      <Route>
        <h1>404 Page not found</h1>
      </Route>
    </Switch>
  )
}

export default App;