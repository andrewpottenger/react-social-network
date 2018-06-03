// - Import react components
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'
import { getTranslate, getActiveLanguage } from 'react-localize-redux'

import StreamComponent from 'containers/stream'

import ProfileInformationContainer from './InformationContainer'
import PropertiesContainer from './PropertiesContainer'
import Neighbours from 'components/Profile/Neighbours'
import Feed from 'components/Profile/Feed'

import PropertyEdit from 'components/PropertyEdit'

import * as postActions from 'src/store/actions/postActions'
import * as userActions from 'src/store/actions/userActions'
import * as globalActions from 'src/store/actions/globalActions'
import { IProfileComponentProps } from './IProfileComponentProps'
import { Profile } from 'core/domain/users'

const s = require('./styles.scss')

type IState = {
  editorOpen: boolean
}

export class ProfileComponent extends Component<
  IProfileComponentProps,
  IState
> {
  state = {
    editorOpen: false
  }

  componentWillMount() {
    // this.props.loadPosts()
    this.props.loadUserInfo()
  }

  handleOpenEditor = () => this.setState({ editorOpen: true })
  handleCloseEditor = () => this.setState({ editorOpen: false })

  render() {
    const { editorOpen } = this.state

    return (
      <div className={s.container}>
        <div className={s.leftPanel}>
          <ProfileInformationContainer />
          <Neighbours />
        </div>
        <div className={s.rightPanel}>
          {!editorOpen && (
            <Button onClick={this.handleOpenEditor}>Open editor</Button>
          )}
          {this.state.editorOpen ? (
            <PropertyEdit property={{}} onClose={this.handleCloseEditor} />
          ) : (
            <Fragment>
              {/* tslint:disable */}
              <PropertiesContainer />
              <Feed />
            </Fragment>
          )}
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
