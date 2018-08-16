import { color, fontScale, fontFamily } from './variables'

export const plusButton = {
  ...fontScale.sm,
  backgroundColor: color['primary-color'],
  color: color['white'],
  fontFamily: fontFamily.light,
  padding: '8px 24px',
  textTransform: 'capitalize',
}
