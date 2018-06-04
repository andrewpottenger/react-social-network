import React, { PureComponent } from 'react'
import { Field } from 'react-final-form'

import Input from 'material-ui/Input'
import { InputLabel } from 'material-ui/Input'
import { FormHelperText, FormControl } from 'material-ui/Form'

const s = require('./styles.scss')

type IProps = {
  label?: string
  placeholder?: string
  name: string
  multiline?: boolean
  fullWidth?: boolean
}

const jsStyles = {
  field: {
    margin: 10
  }
}

export default class FieldText extends PureComponent<IProps> {
  render() {
    const { label, placeholder, name, multiline, fullWidth } = this.props

    return (
      <Field name={name}>
        {({ input, meta }) => {
          const { value, onChange } = input
          const { error } = meta

          return (
            <FormControl
              style={jsStyles.field}
              fullWidth={fullWidth}
              error={!!error}
            >
              <InputLabel htmlFor="name-error">{label}</InputLabel>
              <Input
                autoComplete="off"
                multiline={multiline}
                id="name-error"
                value={value}
                onChange={onChange}
                rows={multiline ? 4 : 1}
              />
              <FormHelperText>{error}</FormHelperText>
            </FormControl>
          )
        }}
      </Field>
    )
  }
}
