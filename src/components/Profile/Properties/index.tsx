import React, { Component } from 'react'

import Projects from './Projects'

const s = require('./index.scss')

type IProps = {
  properties: Array<any>
  isAuthedUser: boolean
}

export default class Properties extends Component<IProps> {
  renderProperty = (property: any) => {
    const { isAuthedUser } = this.props
    const { name, location } = property

    return (
      <div key={property.uid} className={s.propertyContainer}>
        <div className={s.propertyInfo}>
          <img className={s.banner} src="http://via.placeholder.com/300x420" />
          {/* <img className={s.banner} /> */}
          <div className={s.description}>
            <div>{name}</div>
            <div>{location}</div>
          </div>
        </div>
        <Projects projects={property.projects} isAuthedUser={isAuthedUser} />
      </div>
    )
  }

  render() {
    const { properties, isAuthedUser } = this.props

    return (
      <div className={s.container}>
        {isAuthedUser && <div className={s.header}>Add New Property +</div>}
        {properties.map(this.renderProperty)}
      </div>
    )
  }
}
