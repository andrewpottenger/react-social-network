// - Import react components
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Map } from 'immutable'
import cx from 'classnames'

// - Material UI
import { withStyles } from 'material-ui/styles'
import Card, { CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'

// - Import app components
import { Project } from 'components/profile'

// - Import API
// - Import actions
import { ISimplePropertyComponentProps } from './ISimplePropertyComponentProps'
import { ISimplePropertyComponentState } from './ISimplePropertyComponentState'

// - Import styles
import styles from './styles'

/**
 * Create component class
 */
export class SimplePropertyComponent extends Component<
  ISimplePropertyComponentProps,
  ISimplePropertyComponentState
> {
  /**
   * Component constructor
   * @param  {object} props is an object properties of component
   */
  constructor(props: ISimplePropertyComponentProps) {
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

  addNewProject = () => {

  }

  moreProject = () => {

  }

  /**
   * Reneder component DOM
   * @return {react element} return the DOM which rendered by component
   */
  render() {
    const { translate, classes, property, projects } = this.props
    const hasPropertyImage = property.profileImage && property.profileImage !== ''

    return (
      <div className="property">
        <Card className={classes.card}>
          <CardMedia
            className={classes.cover}
            image={property.profileImage}
          >
            <p className={cx('property__label', !hasPropertyImage && 'property__label--dark')}>{property.name}</p>
            <p className={cx('property__label', !hasPropertyImage && 'property__label--dark')}>
              {property.city}{property.city && property.state && ', '}{property.state}
            </p>
            {(!hasPropertyImage) &&
              <p className="property__label property__label--dark property__label--note">No Property Image</p>
            }
          </CardMedia>
          <CardContent className={classes.details}>
            <div className="grid grid__space-between grid__center property__project-header">
              <p className="p-lg--primary">My Latest Project</p>
              <Button
                variant="flat"
                onClick={this.addNewProject}
                className={classes.newButton}
              >
                Add New +
              </Button>
            </div>
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
            <div className="grid grid__right property__project-footer">
              <Button
                variant="flat"
                color="primary"
                onClick={this.moreProject}
                className={classes.moreButton}
              >
                More >
              </Button>
            </div>
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
  ownProps: ISimplePropertyComponentProps
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
  ownProps: ISimplePropertyComponentProps
) => {
  return {}
}

// - Connect component to redux store
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(
  styles as any
)(SimplePropertyComponent as any) as any)
