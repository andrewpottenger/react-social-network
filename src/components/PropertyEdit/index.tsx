import React, { Component } from 'react'
import { Form, Field } from 'react-final-form'

import LocationSVG from 'material-ui-icons/Room'

import { visibilityOptions } from './options'
import TextField from './TextField'
import Select from './Select'

const s = require('./index.scss')

type IProps = {
  property: any
}

type Values = {
  avatar?: string
  banner?: string
  address?: string
  currentLocation?: string
  city?: string
  state?: string
  index?: string
  description?: string
  favorites?: string
  square?: number
  beds?: number
  baths?: number
  yearPurcahsed?: number
  advantages?: string
  disadvantages?: string
  visibility?: number
  upgrades?: string
  changesVisible?: boolean
  openToOffers?: boolean
}

const onSubmit = (values: any): any => {
  console.log('values')
}

export default class PropertyEdit extends Component<IProps> {
  render() {
    return (
      <div className={s.container}>
        <Form
          onSubmit={onSubmit}
          validate={(values: Values) => {
            const errors: Values = {}
            // if (!values.firstName) {
            //   errors.firstName = 'Required'
            // }
            // if (!values.lastName) {
            //   errors.lastName = 'Required'
            // }
            // if (!values.age) {
            //   errors.age = 'Required'
            // } else if (isNaN(values.age)) {
            //   errors.age = 'Must be a number'
            // } else if (values.age < 18) {
            //   errors.age = 'No kids allowed'
            // }
            return errors
          }}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit} className={s.container}>
              <TextField name="address" label="Ender you address" fullWidth />

              <div className={s.currentLocation}>
                <div className={s.wrap}>
                  <TextField
                    name="currentLocation"
                    label="Set you current location"
                    fullWidth
                  />
                </div>
                <LocationSVG fontSize={35} />
              </div>

              <div className={s.areas}>
                <TextField fullWidth name="city" label="City" />
                <TextField fullWidth name="state" label="State" />
                <TextField fullWidth name="index" label="ZIP code" />
              </div>

              <TextField
                fullWidth
                name="description"
                label="Description"
                multiline
              />

              <TextField
                fullWidth
                name="favorites"
                label="What do you like the most?"
                multiline
              />

              <div className={s.homeDetails}>
                <TextField name="square" label="Scuare ft" />
                <TextField name="beds" label="Beds" />
                <TextField name="baths" label="Baths" />
                <TextField name="yearPurcahsed" label="Year purchased" />
              </div>

              <TextField
                fullWidth
                name="advantages"
                label="Advantages"
                multiline
              />
              <TextField
                fullWidth
                name="disadvantages"
                label="Disadvantages"
                multiline
              />

              <div className={s.visibility}>
                <Select
                  options={visibilityOptions}
                  name="visibility"
                  label="Profile Visibility"
                  fullWidth
                />
              </div>

              <div className="buttons">
                <button type="submit" disabled={submitting}>
                  Submit
                </button>
                <button
                  type="button"
                  onClick={form.reset}
                  disabled={submitting || pristine}
                >
                  Reset
                </button>
              </div>
              <pre>{JSON.stringify(values)}</pre>
            </form>
          )}
        />
      </div>
    )
  }
}
