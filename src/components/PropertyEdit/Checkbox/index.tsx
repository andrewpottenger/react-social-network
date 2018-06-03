import React, { Component } from 'react'
import { Field } from 'react-final-form'

import Checkbox from 'material-ui/Checkbox'
import { FormControlLabel } from 'material-ui/Form'

const s = require('./styles.scss')

type IProps = {
  label?: string
  name: string
}

const jsStyles = {
  field: {
    margin: 10
  }
}

export default class PropertyEdit extends Component<IProps> {
  render() {
    const { label, name } = this.props

    return (
      <Field name={name}>
        {({ input }) => {
          const { value, onChange } = input

          return (
            <FormControlLabel
              control={
                <Checkbox
                  checked={value}
                  onChange={onChange}
                  value="checkedA"
                />
              }
              label={label}
            />
          )
        }}
      </Field>
    )
  }
}
