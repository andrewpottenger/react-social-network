import React from 'react'

const s = require('./Projects.scss')

type IProps = {
  projects: Array<any>
  isAuthedUser: boolean
}

const Project = ({ project }: { project: any }) => {
  console.log('project', project)
  const { name, progress } = project
  const progressText = progress === 100 ? 'Completed' : `${progress}%`

  return (
    <div className={s.project}>
      <img src="http://via.placeholder.com/180x140" />
      <div className={s.description}>
        <div className={s.name}>{name}</div>
        <div className={s.startDate}>Start date 1/2/2018</div>
        <div className={s.progress}>Progress: {progressText}</div>
      </div>
    </div>
  )
}

export default ({ projects, isAuthedUser }: IProps) => {
  const title = isAuthedUser ? 'My Latest Projects' : 'Latest Projects'

  return (
    <div className={s.container}>
      <div className={s.header}>
        <span className={s.title}>{title}</span>
        {isAuthedUser && <span className={s.addNew}>Add new +</span>}
      </div>
      <div className={s.projectsContainer}>
        {projects.map(project => (
          <Project key={project.uid} project={project} />
        ))}
      </div>
      <div className={s.footer}>
        <span>more >> </span>
      </div>
    </div>
  )
}
