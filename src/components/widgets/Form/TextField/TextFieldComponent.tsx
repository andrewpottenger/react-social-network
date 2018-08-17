// - Import react components
import React, { Component, ChangeEvent } from 'react'
import { connect } from 'react-redux'
import config from 'src/config'
import { Map, List as ImuList } from 'immutable'

// - Material UI
import { withStyles } from 'material-ui/styles'
import Card, { CardContent, CardMedia } from 'material-ui/Card'
import { grey } from 'material-ui/colors'
import IconButton from 'material-ui/IconButton'
import MoreVertIcon from 'material-ui-icons/MoreVert'
import { MenuList, MenuItem } from 'material-ui/Menu'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import RaisedButton from 'material-ui/Button'
import EventListener, { withOptions } from 'react-event-listener'
import { Parallax, Background } from 'react-parallax'
import { getTranslate, getActiveLanguage } from 'react-localize-redux'

// - Import app components
import ImgCover from 'components/imgCover'
import EditProfile from 'components/editProfile'
import UserAvatar from 'components/userAvatar'
import PostComponent from 'src/components/post'
import { Project } from 'components/profile'

// - Import API
import * as PostAPI from 'src/api/PostAPI'

// - Import actions
import * as globalActions from 'store/actions/globalActions'
import * as userActions from 'store/actions/userActions'
import { Post } from 'src/core/domain/posts'
import { ITextFieldComponentProps } from './ITextFieldComponentProps'
import { ITextFieldComponentState } from './ITextFieldComponentState'

const styles = (theme: any) => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
})

/**
 * Create component class
 */
export class TextFieldComponent extends Component<any, ITextFieldComponentProps, ITextFieldComponentState> {
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

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    this.props.handleChange(value)
  }

  /**
   * Reneder component DOM
   * @return {react element} return the DOM which rendered by component
   */
  render() {
    const { classes } = this.props
    const { value } = this.state

    return (
      <TextField
        id="name"
        label="Name"
        className={classes.textField}
        value={value}
        onChange={this.handleChange}
        margin="normal"
      />
    )
  }
}

export default withStyles(styles as any)(TextFieldComponent as any)