// - Import react components
import React, { Component, ChangeEvent } from 'react'
import { connect } from 'react-redux'
import { Map } from 'immutable'
import cx from 'classnames'

// - Material UI
import { withStyles } from 'material-ui/styles'
import TextField from 'material-ui/TextField'
import { getTranslate } from 'react-localize-redux'

// - Import app components
// - Import API

// - Import actions
import { ITextFieldComponentProps } from './ITextFieldComponentProps'
import { ITextFieldComponentState } from './ITextFieldComponentState'

// - Import styles
import styles from './styles'

export class TextFieldComponent extends Component<ITextFieldComponentProps, ITextFieldComponentState> {
  /**
   * Component constructor
   * @param  {object} props is an object properties of component
   */
  constructor(props: ITextFieldComponentProps) {
    super(props)

    /**
     * Defaul state
     */
    this.state = {
      value: this.props.defaultValue || '',
    }

    // Binding functions to `this`
  }

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps: ITextFieldComponentProps) {
    const { defaultValue } = nextProps
    if (defaultValue !== this.props.defaultValue) {
      this.setState({value: defaultValue || ''})
    }
  }

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    this.setState({value})
    this.props.handleChange(value)
  }

  /**
   * Reneder component DOM
   * @return {react element} return the DOM which rendered by component
   */
  render() {
    const { classes, id, label, multiline } = this.props
    const { value } = this.state

    return (
      <TextField
        id={id}
        label={label}
        rows={multiline ? 4 : 1}
        multiline={multiline}
        className={cx(classes.textField, multiline ? classes.multilineTextField : '')}
        value={value}
        onChange={this.handleChange}
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
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
  ownProps: ITextFieldComponentProps
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
  ownProps: ITextFieldComponentProps
) => {
  // const { userId } = ownProps.match.params
  return {
    translate: getTranslate(state.get('locale')),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(
  styles as any
)(TextFieldComponent as any) as any)