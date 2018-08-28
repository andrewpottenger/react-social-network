// - Import react components
import React, { Component, ChangeEvent } from 'react'
import { connect } from 'react-redux'
import { Map } from 'immutable'

// - Material UI
import { withStyles } from 'material-ui/styles'
import TextField from 'material-ui/TextField'
import { getTranslate } from 'react-localize-redux'

// - Import app components
// - Import API

// - Import actions
import { ISelectComponentProps } from './ISelectComponentProps'
import { ISelectComponentState } from './ISelectComponentState'

// - Import styles
import styles from './styles'

export class SelectComponent extends Component<ISelectComponentProps, ISelectComponentState> {
  /**
   * Component constructor
   * @param  {object} props is an object properties of component
   */
  constructor(props: ISelectComponentProps) {
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

  componentWillReceiveProps(nextProps: ISelectComponentProps) {
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
    const { classes, id, label, options } = this.props
    const { value } = this.state

    return (
      <TextField
        id={id}
        select
        label={label}
        className={classes.textField}
        value={value}
        onChange={this.handleChange}
        SelectProps={{
          native: true,
          MenuProps: {
            className: classes.menu,
          },
        }}
        margin="normal"
      >
        {options.map((option: {value: string, label: string}) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </TextField>
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
  ownProps: ISelectComponentProps
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
  ownProps: ISelectComponentProps
) => {
  // const { userId } = ownProps.match.params
  return {
    translate: getTranslate(state.get('locale')),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(
  styles as any
)(SelectComponent as any) as any)