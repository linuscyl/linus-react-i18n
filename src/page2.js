import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';

class page2 extends Component {

  constructor(props) {
    super(props)

    this.state = {

    }
  }
  render() {

    const { t } = this.props;


    return (
      <div>
        <h3>You are in page 2</h3>
        <h1>Content: {t('content')}</h1>
        <Link to="/">
          <button> Go to Home Page</button>
        </Link>
      </div>
    )
  }
}

export default withNamespaces()(page2);
