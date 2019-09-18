import React, { Component } from 'react';
import i18n from './i18n';
import { withNamespaces } from 'react-i18next';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import page2 from './page2';
import home from './home';
import sorry from './sorry';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    const { t } = this.props;

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    }


    return (
      <div className="App">
        <h3>This is header</h3>
        <h1>Header: {t('Welcome to React')}</h1>
        <button onClick={() => changeLanguage('de')}>de</button>
        <button onClick={() => changeLanguage('en')}>en</button>
        <h3>path: {t('path')}</h3>
        <hr />
        <h3>This is Component</h3>
        <Router>
          <Switch>
            <Route path="/" exact component={home} />
            <Route path="/page2" exact component={page2} />
            {/* <Route path="/de/page2" exact component={page2} /> */}
            <Route path="/" component={sorry} />
          </Switch>
        </Router>
        <hr />
        <h3> The is footer </h3>
      </div>
    )
  }
}

export default withNamespaces()(App)
