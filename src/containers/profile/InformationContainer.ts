import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Map } from 'immutable'
import Dialog from 'material-ui/Dialog'
import Button from 'material-ui/Button'
import RaisedButton from 'material-ui/Button'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { getTranslate } from 'react-localize-redux'

import ProfileInformation from 'components/Profile/Information'

import * as userActions from 'src/store/actions/userActions'
import { Profile } from 'core/domain/users'

type IOwnProps = RouteComponentProps<{ userId: number }>

const mapStateToProps = (state: Map<string, any>, ownProps: IOwnProps) => {
  const { userId } = ownProps.match.params
  const uid = state.getIn(['authorize', 'uid'], 0)
  const isEditorOpen = state.getIn(['user', 'openEditProfile'], false)

  const userProfile = state.getIn(['user', 'info', userId], {}) as Profile

  return {
    isAuthedUser: userId === uid,
    profile: userProfile,
    isEditorOpen
  }
}

const mapDispatchToProps = {
  openEditProfile: userActions.openEditProfile
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProfileInformation as any)
)
