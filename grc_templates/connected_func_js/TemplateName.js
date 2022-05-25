
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import style from './TemplateName.module.css'
export const TemplateName = (props) => {
  return (
    <div className={style.TemplateName}>
        
    </div>
  )
}

TemplateName.propTypes = {
  second: PropTypes
}

const mapStateToProps = (state) => {}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(TemplateName)