// - Import react components
import React, { Component, ChangeEvent } from 'react'
import { connect } from 'react-redux'
import { Map } from 'immutable'

// - Material UI
import { withStyles } from 'material-ui/styles'
import TextField from 'material-ui/TextField'
import { InputAdornment } from 'material-ui/Input'
import Search from 'material-ui-icons/Search'
import { getTranslate } from 'react-localize-redux'

// - Import app components
// - Import API

// - Import actions
import { ISearchTextFieldComponentProps } from './ISearchTextFieldComponentProps'
import { ISearchTextFieldComponentState } from './ISearchTextFieldComponentState'

// - Import styles
import styles from './styles'

export class TextFieldComponent extends Component<ISearchTextFieldComponentProps, ISearchTextFieldComponentState> {
  /**
   * Component constructor
   * @param  {object} props is an object properties of component
   */
  constructor(props: ISearchTextFieldComponentProps) {
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
    const { classes, id, multiline } = this.props
    const { value } = this.state

    return (
      <TextField
        id={id}
        className={classes.textField}
        value={value}
        placeholder="Search"
        onChange={this.handleChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" className={classes.adornment}>
              <Search className={classes.searchIcon}/>
            </InputAdornment>
          ),
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
  ownProps: ISearchTextFieldComponentProps
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
  ownProps: ISearchTextFieldComponentProps
) => {
  // const { userId } = ownProps.match.params
  return {
    translate: getTranslate(state.get('locale')),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(
  styles as any
)(TextFieldComponent as any) as any)