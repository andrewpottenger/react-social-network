// - Import react components
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Map } from 'immutable'

import List from 'material-ui/List'

// - Import app components
import CircleComponent from 'components/circle'
import { IProgressBarComponentProps } from './IProgressBarComponentProps'

// - Import API

// - Import actions

/**
 * Create component class
 */

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

// export class ProgressBarComponent extends Component<
//   IProgressBarComponentProps
// > {
//   static propTypes = {}

//   /**
//    * Component constructor
//    * @param  {object} props is an object properties of component
//    */
//   constructor(props: IProgressBarComponentProps) {
//     super(props)

//     // Binding functions to `this`
//   }

//   /**
//    * Reneder component DOM
//    * @return {react element} return the DOM which rendered by component
//    */
//   render() {
//     return (
//       <div>
        
//       </div>
//     )
//   }
// }

export default ProgressBarComponent
