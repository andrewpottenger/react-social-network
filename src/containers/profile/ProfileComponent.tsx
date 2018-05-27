// - Import react components
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Dialog from 'material-ui/Dialog'
import Button from 'material-ui/Button'
import RaisedButton from 'material-ui/Button'
import { getTranslate, getActiveLanguage } from 'react-localize-redux'
import { Map } from 'immutable'

import StreamComponent from 'containers/stream'

import ProfileInformationContainer from './InformationContainer'
import PropertiesContainer from './PropertiesContainer'
import Neighbours from 'components/Profile/Neighbours'
import Feed from 'components/Profile/Feed'

import * as postActions from 'src/store/actions/postActions'
import * as userActions from 'src/store/actions/userActions'
import * as globalActions from 'src/store/actions/globalActions'
import { IProfileComponentProps } from './IProfileComponentProps'
import { Profile } from 'core/domain/users'

const s = require('./styles.scss')

export class ProfileComponent extends Component<IProfileComponentProps> {
  componentWillMount() {
    // this.props.loadPosts()
    this.props.loadUserInfo()
  }

  render() {
    return (
      <div className={s.container}>
        <div className={s.leftPanel}>
          <ProfileInformationContainer />
          <Neighbours />
        </div>
        <div className={s.rightPanel}>
          <PropertiesContainer />
          <Feed />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (
  dispatch: any,
  ownProps: IProfileComponentProps
) => {
  const { userId } = ownProps.match.params

  return {
    loadUserInfo: () =>
      dispatch(userActions.dbGetUserInfoByUserId(userId, 'header'))
  }
}

export default connect(undefined, mapDispatchToProps)(ProfileComponent as any)
