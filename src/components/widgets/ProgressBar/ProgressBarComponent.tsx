// - Import react components
import React, { Component } from 'react'

// - Import app components
import { IProgressBarComponentProps } from './IProgressBarComponentProps'

// - Import API
// - Import actions

export const ProgressBarComponent = (props: IProgressBarComponentProps) => {
  
  const { progress } = props
  const title = progress === 100 ? 'Progress: Completed' : `Progress: ${progress}%`
  const primaryBg = { backgroundColor: '#912099' }
  const greyBg = { backgroundColor: '#EDEDED' }
  return (
    <div className="progressBar">
      <p className="progressBar__title">{title}</p>
      <div className="progressBar__bar">
        <div
          className="progressBar__circle progressBar__circle--left"
          style={progress === 0 ? greyBg : primaryBg }
        />
        <div className="progressBar__line">
          <div
            className="progressBar__line-inner"
            style={{width: `${progress}%`}}
          />
        </div>
        <div
          className="progressBar__circle progressBar__circle--right"
          style={progress === 100 ? primaryBg : greyBg }  
        />
      </div>
    </div>
  )
}

export default ProgressBarComponent
