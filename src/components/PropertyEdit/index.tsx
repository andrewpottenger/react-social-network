import React, { Component } from 'react'
import { Form, Field } from 'react-final-form'

const s = require('./index.scss')

type IProps = {
  property: any
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
          validate={(values: any) => {
            const errors = {}
            if (!values.firstName) {
              errors.firstName = 'Required'
            }
            if (!values.lastName) {
              errors.lastName = 'Required'
            }
            if (!values.age) {
              errors.age = 'Required'
            } else if (isNaN(values.age)) {
              errors.age = 'Must be a number'
            } else if (values.age < 18) {
              errors.age = 'No kids allowed'
            }
            return errors
          }}
          render={({ handleSubmit, reset, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
              <Field name="firstName">
                {({ input, meta }) => (
                  <div>
                    <label>First Name</label>
                    <input {...input} type="text" placeholder="First Name" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="lastName">
                {({ input, meta }) => (
                  <div>
                    <label>Last Name</label>
                    <input {...input} type="text" placeholder="Last Name" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="age">
                {({ input, meta }) => (
                  <div>
                    <label>Age</label>
                    <input {...input} type="text" placeholder="Age" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <div className="buttons">
                <button type="submit" disabled={submitting}>
                  Submit
                </button>
                <button
                  type="button"
                  onClick={reset}
                  disabled={submitting || pristine}
                >
                  Reset
                </button>
              </div>
              <pre>{JSON.stringify(values, 0, 2)}</pre>
            </form>
          )}
        />
      </div>
    )
  }
}
