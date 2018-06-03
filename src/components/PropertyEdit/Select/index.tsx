import React, { Component } from 'react'
import { Field } from 'react-final-form'

import Input from 'material-ui/Input'
import { InputLabel } from 'material-ui/Input'
import { FormControl } from 'material-ui/Form'
import Select from 'material-ui/Select'
import { MenuItem } from 'material-ui/Menu'

const s = require('./styles.scss')

type SelectOption = {
  value: any
  label: string
}

type IProps = {
  label?: string
  placeholder?: string
  name: string
  multiline?: boolean
  fullWidth?: boolean
  options: SelectOption[]
}

type IState = {
  open: boolean
}

const jsStyles = {
  field: {
    margin: 10
  }
}

export default class PropertyEdit extends Component<IProps, IState> {
  public state = {
    open: false
  }

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
              <InputLabel>{label}</InputLabel>
              <Select
                open={this.state.open}
                onClose={this.handleClose}
                onOpen={this.handleOpen}
                value={value}
                onChange={onChange}
              >
                {this.renderOptions()}
              </Select>
            </FormControl>
          )
        }}
      </Field>
    )
  }

  private renderOptions = () => {
    const { options } = this.props

    return options.map(({ value, label }) => (
      <MenuItem key={value} value={value}>
        {label}
      </MenuItem>
    ))
  }

  private handleOpen = () => this.setState({ open: true })

  private handleClose = () => this.setState({ open: false })
}
