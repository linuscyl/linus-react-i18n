import React, { Component } from 'react'
import i18n from './i18n';

class sorry extends Component {

  constructor(props) {
    super(props)

    this.state = {

    }
  }
  render() {

    const { t } = this.props;


    return (
      <div>
        <h3>Sorry. No this page</h3>
      </div>
    )
  }
}

export default sorry;
