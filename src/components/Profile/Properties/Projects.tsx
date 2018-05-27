import React from 'react'

const s = require('./Projects.scss')

type IProps = {
  projects: Array<any>
  isAuthedUser: boolean
}

export default ({ projects, isAuthedUser }: IProps) => {
  const title = isAuthedUser ? 'My Latest Projects' : 'Latest Projects'
  return (
    <div className={s.projectsContainer}>
      <div className={s.header}>
        <span className={s.title}>{}</span>
        {isAuthedUser && <span className={s.addNew}>Add new +</span>}
      </div>
    </div>
  )
}
