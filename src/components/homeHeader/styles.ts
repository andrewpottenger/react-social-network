import { fontScale, color, dimension } from 'src/styles/inline/variables'
import { layouts } from 'src/styles/inline'

const styles = {
  root: {
    backgroundColor: color['secondary-color'],
  },

  toolBar: {
    ...layouts.headerContainer,
    minHeight: dimension.headerHeight,
  },

  badge: {
    ...fontScale.sm,
    
    '& > span': {
      right: '-2px',
      top: '-2px',
      color: color['white'],
      backgroundColor: color['primary-color'],
    }
  },

  avatarStyle: {
    margin: 5,
    cursor: 'pointer'
  }
}

export default styles
