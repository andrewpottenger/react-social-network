// - Import react components
import React, { Component, ChangeEvent } from 'react'
import { connect } from 'react-redux'
import { Map } from 'immutable'

// - Material UI
import { withStyles } from 'material-ui/styles'
import FormControlLabel from 'material-ui/Form/FormControlLabel'
import Checkbox from 'material-ui/Checkbox'
import { getTranslate } from 'react-localize-redux'

// - Import app components
// - Import API

// - Import actions
import { ICheckboxComponentProps } from './ICheckboxComponentProps'
import { ICheckboxComponentState } from './ICheckboxComponentState'

// - Import styles
import styles from './styles'

export class CheckboxComponent extends Component<ICheckboxComponentProps, ICheckboxComponentState> {
  /**
   * Component constructor
   * @param  {object} props is an object properties of component
   */
  constructor(props: ICheckboxComponentProps) {
    super(props)

    /**
     * Defaul state
     */
    this.state = {
      value: this.props.defaultValue || false,
    }

    // Binding functions to `this`
  }

  componentDidMount() { }

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.checked
    this.setState({value})
    this.props.handleChange(value)
  }

  /**
   * Reneder component DOM
   * @return {react element} return the DOM which rendered by component
   */
  render() {
    const { classes, id, label } = this.props
    const { value } = this.state

    return (
      <FormControlLabel
        control={
          <Checkbox
            checked={value}
            onChange={this.handleChange}
            value={label}
          />
        }
        label={label}
        color="primary"
        className={classes.checkBox}
      />
    )
  }
}

/**
 * Map dispatch to props
 * @param  {func} dispatch is the function to dispatch action to reducers
 * @param  {object} ownProps is the props belong to component
 * @return {object}          props of component
 */
const mapDispatchToProps = (
  dispatch: any,
  ownProps: ICheckboxComponentProps
) => {
  return {}
}

/**
 * Map state to props
 * @param  {object} state is the obeject from redux store
 * @param  {object} ownProps is the props belong to component
 * @return {object}          props of component
 */
const mapStateToProps = (
  state: Map<string, any>,
  ownProps: ICheckboxComponentProps
) => {
  // const { userId } = ownProps.match.params
  return {
    translate: getTranslate(state.get('locale')),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(
  styles as any
)(CheckboxComponent as any) as any)