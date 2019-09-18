import React, { Component } from 'react'
import { Link } from 'react-router-dom';
// import i18n from './i18n';
import { withNamespaces } from 'react-i18next';

class home extends Component {
  render() {

    const { t } = this.props
    // const changeLanguage = (lng) => {
    //   i18n.changeLanguage(lng);
    // }

    console.log('t', { t })

    return (
      <div>
        <h3>you are in home page</h3>
        <h3>Home Content: {t('homeContent')}</h3>
        <Link to="/page2">
          <button> Go to Page 2</button>
        </Link>
      </div>
    )
  }
}

export default withNamespaces()(home)
