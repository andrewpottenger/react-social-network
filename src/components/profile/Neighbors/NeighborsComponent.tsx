// - Import react components
import React, { Component } from 'react'
import { connect } from 'react-redux'
import config from 'src/config'
import { Map } from 'immutable'

// - Material UI
import ExpandMoreIcon from 'material-ui-icons/ExpandMore'
import ExpansionPanel, { ExpansionPanelSummary, ExpansionPanelDetails } from 'material-ui/ExpansionPanel'
import GridList, { GridListTile } from 'material-ui/GridList'
import { withStyles } from 'material-ui/styles'
import { getTranslate, getActiveLanguage } from 'react-localize-redux'

// - Import app components

// - Import API

// - Import actions
import * as globalActions from 'store/actions/globalActions'
import * as userActions from 'store/actions/userActions'
import { INeighborsComponentProps } from './INeighborsComponentProps'
import { INeighborsComponentState } from './INeighborsComponentState'

const styles = (theme: any) => ({
  root: {
    width: '100%',
  },

  header: {
    minHeight: '35px !important',
    height: '35px',
    padding: '0',

    '& > div': {
      height: '35px',
      margin: '0 !important',

      '&:last-child': {
        width: '20px',
      }
    }
  },

  body: {
    padding: '20px 0',
    background: '#EDEDED',
  },

  gridList: {
    width: '100%',
    height: 'auto',
    margin: '-5px !important',
    
    '&>li': {
      padding: '5px 4px !important',
    }
  },

  subheader: {
    width: '100%',
  },
})

const expandIcon = <ExpandMoreIcon style={{color: 'white'}} />

/**
 * Create component class
 */
export class NeighborsComponent extends Component<
  INeighborsComponentProps,
  INeighborsComponentState
> {
  /**
   * Component constructor
   * @param  {object} props is an object properties of component
   */
  constructor(props: INeighborsComponentProps) {
    super(props)

    /**
     * Defaul state
     */
    this.state = {
      /**
       * If it's true , the window is in small size
       */
      isSmall: false,
      cellHeight: 89,
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
    let cellHeight = 89
    if (width < 960) {
      cellHeight = width / 3 - 20
    }
    this.setState({cellHeight})
  }

  componentDidMount() {
    this.handleResize()
    window.addEventListener('resize', this.handleResize.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize.bind(this))
  }

  /**
   * Reneder component DOM
   * @return {react element} return the DOM which rendered by component
   */
  render() {
    const { classes, neighbors } = this.props
    const { cellHeight } = this.state
    
    return (
      <div className="profileNeighbors">
        <ExpansionPanel defaultExpanded className={classes.root}>
          <ExpansionPanelSummary className={classes.header} expandIcon={expandIcon}>
            <div className="profileNeighbors__header">
              <p>My Neighbors</p>
              <p>All</p>
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.body}>
            <div className="profileNeighbors__body">
      
              <GridList cellHeight={cellHeight} className={classes.gridList} cols={3}>
                {Object.keys(neighbors).map(i => (
                  <GridListTile key={neighbors[i].userId} cols={1}>
                    {
                      neighbors[i].avatar ?
                        <img src={neighbors[i].avatar} alt={neighbors[i].fullName} /> :
                        <div className="profileNeighbors__body-empty-title">{neighbors[i].fullName}</div>
                    }
                    
                  </GridListTile>
                ))}
              </GridList>
        
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
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
  ownProps: INeighborsComponentProps
) => {
  return {
    openEditor: () => dispatch(userActions.openEditProfile())
  }
}

/**
 * Map state to props
 * @param  {object} state is the obeject from redux store
 * @param  {object} ownProps is the props belong to component
 * @return {object}          props of component
 */
const mapStateToProps = (
  state: Map<string, any>,
  ownProps: INeighborsComponentProps
) => {
  return {
    translate: getTranslate(state.get('locale')),
    editProfileOpen: state.getIn(['user', 'openEditProfile'])
  }
}

// - Connect component to redux store
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(
  styles as any
)(NeighborsComponent as any) as any)