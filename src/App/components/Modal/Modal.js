
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import Button from '../Button/Button'
import style from './Modal.module.css'
export const Modal = (props) => {
  console.log(props)
  return (
    props.isShown ?
      <div className={style.Modal}>
        <div className={style.container}>
          <div className={style.modalContent}>{props.text}</div>
          <div style={{ textAlign: 'center' }}>
            {/* <Button onButtonClicked={(evt) => { props.close() }}>OK</Button> */}
          </div>
        </div>
      </div> : null
  )
}

const mapStateToProps = (state, p) => {
  console.log(state);
  return {
    ...p, ...state.modal
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    close: () => { dispatch({ type: 'CLOSE_MODAL' }) }
  }
}

export const ConnectedModal = connect(mapStateToProps, mapDispatchToProps)(Modal)