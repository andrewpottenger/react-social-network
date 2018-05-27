import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Map } from 'immutable'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { getTranslate } from 'react-localize-redux'
import entries from 'lodash/entries'

import ProfileProperties from 'components/Profile/Properties'

import * as userActions from 'src/store/actions/userActions'
import { Profile } from 'core/domain/users'

type IOwnProps = RouteComponentProps<{ userId: number }>

const mockedProjects = {
  'projectId-1': {
    uid: 'projectId-1',
    belongsTo: 'propertie1',
    name: 'Kitchen',
    progress: 50,
    banner: 'https://goo.gl/someimage1',
    descripion: 'somedescription1'
  },
  'projectId-2': {
    uid: 'projectId-2',
    belongsTo: 'propertie1',
    name: 'Patio',
    progress: 100,
    banner: 'https://goo.gl/someimage2',
    descripion: 'somedescription1'
  }
}

const mockedProperties = {
  'propertieId-1': {
    uid: 'propertieId-1',
    name: 'Casa Austin',
    location: 'Austin, TX',
    banner: 'https://goo.gl/someimage1',
    projects: { 'projectId-1': true, 'projectId-2': true }
  }
}

const mapStateToProps = (state: Map<string, any>, ownProps: IOwnProps) => {
  const { userId } = ownProps.match.params
  const uid = state.getIn(['authorize', 'uid'], 0)

  // all this logic will be handled by serializer
  const properties = entries(mockedProperties).map(([key, values]) => {
    const propertyProjects = entries(values.projects).map(
      ([key]) => mockedProjects[key]
    )

    return {
      ...values,
      projects: propertyProjects
    }
  })

  return {
    isAuthedUser: userId === uid,
    properties
  }
}

const mapDispatchToProps = {
  openEditProfile: userActions.openEditProfile
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProfileProperties as any)
)
