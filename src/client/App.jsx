import React from 'react';
import { Route, Switch } from 'react-router-dom'

import * as Modules from './modules'

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Modules.Home} />
      {/* <Route path="/quiz/:id?" component={() => <Modules.Post key={window.location.pathname}/>} /> */}
    </Switch>
  )
}

export default App;