import React, { Component } from 'react'
import cx from 'classnames'
import EditIcon from 'material-ui-icons/Edit'

import EditProfile from 'components/editProfile'
import Avatar from 'components/userAvatar'
import { Profile } from 'core/domain/users'

const s = require('./styles.scss')

type IProps = {
  profile: Profile
  isAuthedUser: boolean
  isEditorOpen: boolean
  openEditProfile: () => void
}

export default class Information extends Component<IProps> {
  render() {
    // console.log('profile', this.props)
    const {
      profile: { avatar, fullName, banner },
      isAuthedUser,
      isEditorOpen,
      openEditProfile
    } = this.props
    return (
      <div className={s.container}>
        <div className={s.editButton}>
          {/* TODO: use ui-constants */}
          {isAuthedUser && (
            <EditIcon
              color={'primary'}
              style={{ color: '#9b29a2' }}
              onClick={openEditProfile}
            />
          )}
        </div>
        <Avatar fullName={fullName} fileName={avatar} size={120} />
        <div className={s.name}>{fullName}</div>
        <div className={s.userFields}>
          <div className={cx(s.field, s.locaion)}>User Location</div>
          <div className={cx(s.field, s.house)}>User House?</div>
          <div className={cx(s.field, s.followers)}>42 followers</div>
        </div>
        {isAuthedUser &&
          isEditorOpen && (
            <EditProfile avatar={avatar} banner={banner} fullName={fullName} />
          )}
      </div>
    )
  }
}
