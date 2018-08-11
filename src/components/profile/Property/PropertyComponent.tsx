// - Import react components
import React, { Component } from 'react'
import { connect } from 'react-redux'
import config from 'src/config'
import { Map } from 'immutable'

// - Material UI
import { withStyles } from 'material-ui/styles'
import Card, { CardContent, CardMedia } from 'material-ui/Card'
import { grey } from 'material-ui/colors'
import IconButton from 'material-ui/IconButton'
import MoreVertIcon from 'material-ui-icons/MoreVert'
import { MenuList, MenuItem } from 'material-ui/Menu'
import Button from 'material-ui/Button'
import RaisedButton from 'material-ui/Button'
import EventListener, { withOptions } from 'react-event-listener'
import { Parallax, Background } from 'react-parallax'
import { getTranslate, getActiveLanguage } from 'react-localize-redux'

// - Import app components
import ImgCover from 'components/imgCover'
import EditProfile from 'components/editProfile'
import UserAvatar from 'components/userAvatar'
import { Project } from 'components/profile'
// - Import API

// - Import actions
import * as globalActions from 'store/actions/globalActions'
import * as userActions from 'store/actions/userActions'
import { IPropertyComponentProps } from './IPropertyComponentProps'
import { IPropertyComponentState } from './IPropertyComponentState'

const styles = (theme: any) => ({
  card: {
    display: 'flex',
    maxWidth: '906px',
    height: '537px',
  },
  cover: {
    flex: '1 0 auto',
  },
  details: {
    width: '474px',
    display: 'flex',
    flexDirection: 'column',
    padding: '27px 20px 5px 20px',
    backgroundColor: '#E7E7E7',
  },

})

/**
 * Create component class
 */
export class PropertyComponent extends Component<
  IPropertyComponentProps,
  IPropertyComponentState
> {
  /**
   * Component constructor
   * @param  {object} props is an object properties of component
   */
  constructor(props: IPropertyComponentProps) {
    super(props)

    /**
     * Defaul state
     */
    this.state = {
      /**
       * If it's true , the window is in small size
       */
      isSmall: false
    }

    // Binding functions to `this`
  }
  /**
   * Handle resize event for window to change sidebar status
   * @param  {event} evt is the event is passed by winodw resize event
   */
  handleResize = () => {
    // Set initial state
    let width = window.innerWidth

    if (width > 900) {
      this.setState({
        isSmall: false
      })
    } else {
      this.setState({
        isSmall: true
      })
    }
  }

  componentDidMount() {
    this.handleResize()
  }

  /**
   * Reneder component DOM
   * @return {react element} return the DOM which rendered by component
   */
  render() {
    const { translate, classes, image, projects } = this.props

    return (
      <div className="property">
        <Card className={classes.card}>
          <CardMedia
            className={classes.cover}
            image={image}
            title="Casa Austin Austin, Tx"
          >
            <p className="property__label">Casa Austin</p>
            <p className="property__label">Austin, TX</p>
          </CardMedia>
          <CardContent className={classes.details}>
            {
              projects.map((item: any, index: number) => (
                <Project
                  key={`project-${index.toString()}`}
                  image={item.image}
                  name={item.name}
                  date={item.date}
                  progress={item.progress}
                />
              ))
            }
          </CardContent>
        </Card>
      </div>
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
  ownProps: IPropertyComponentProps
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
  ownProps: IPropertyComponentProps
) => {
  return {
    translate: getTranslate(state.get('locale')),
  }
}

// - Connect component to redux store
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(
  styles as any
)(PropertyComponent as any) as any)