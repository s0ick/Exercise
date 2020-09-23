import React from 'react';
import style from '../Page2.module.css';
import errorStyle from '../../common/FormsControls/FormControls.module.css';
import { reduxForm, Field } from 'redux-form';
import { Input } from '../../common/FormsControls/FormsControls';

const MapForm = ({handleSubmit, error}) => {
  return (
    <form onSubmit={handleSubmit} className={style.ащкь + " " + (error && errorStyle.formMapError)}>
      <h1 className={style.title}>Please enter an address...</h1>
      <div className={style.inputBlock}>
        <Field component={Input} id="Address" type="text" name="Address" className={style.input} autoComplete={"off"} />
      </div>
      <span className={errorStyle.fromSpanError}>{error} <span className={errorStyle.ellipse}></span></span>
    </form>
  )
}

export default reduxForm({form: 'map'})(MapForm);