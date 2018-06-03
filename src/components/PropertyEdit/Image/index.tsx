import React, { Component } from 'react'
import { Field } from 'react-final-form'
import cx from 'classnames'

import AppDialogTitle from 'layouts/dialogTitle'
import ImageGallery from 'components/imageGallery'

import Dialog, { DialogTitle } from 'material-ui/Dialog'
import Button from 'material-ui/Button'

const s = require('./styles.scss')

type IProps = {
  label?: string
  name: string
}

type IState = {
  open: boolean
}

const jsStyles = {
  field: {
    margin: 10
  }
}

export default class FieldCheckbox extends Component<IProps, IState> {
  state = {
    open: false
  }

  render() {
    const { label, name } = this.props

    return (
      <Field name={name}>
        {({ input }) => {
          const { value, onChange } = input

          return (
            <div className={cx(s.container, s[name])}>
              <span>{label}</span>
              <div className={cx(s.imageContainer, s[name])}>
                {value && <img src={value} className={cx(s.image, s[name])} />}
                <div className={s.buttonContainer}>
                  <Button
                    variant="flat"
                    component="span"
                    onClick={this.openGallery}
                  >
                    Upload
                  </Button>
                </div>
                {this.renderDialog(onChange)}
              </div>
            </div>
          )
        }}
      </Field>
    )
  }

  private openGallery = () => this.setState({ open: true })

  private closeGallery = () => this.setState({ open: false })

  private renderDialog = (onChange: any) => {
    const { open } = this.state
    return (
      <Dialog open={open} onClose={this.closeGallery}>
        <DialogTitle>
          <AppDialogTitle
            title={'Choose avatar image'}
            onRequestClose={this.closeGallery}
          />
        </DialogTitle>
        <ImageGallery set={onChange} close={this.closeGallery} />
      </Dialog>
    )
  }
}
