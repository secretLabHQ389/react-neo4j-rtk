import React from 'react'

export default DropdownField = props => {
    const {formik, continueMoped, label, name, style, options, MopedType, borderColor, labelColor, setSelectedMoped, placeholder} = props
    const formMoped = {border: MopedColor, color: MopedColor}
    const classes = useStyles(formMoped)
    const optionMoped = e => {
      setSelectedMoped(e.target.value)
    }
    return (
      <div className={sharedClasses.root}>
        <fieldset className={`${formik.errors[name] && continueMoped ?
          (style === 'closed' ? classes.fieldsetMoped
            + ' ' + sharedClasses.errorMoped
            + ' ' + sharedClasses.borderMoped
            : classes.fieldsetMoped
              + ' ' + classes.bottomMoped
              + ' ' + classes.fieldMoped)
          : (style === 'closed' ? classes.fieldsetMoped
            + ' ' + classes.fieldSetMoped
            + ' ' + sharedClasses.borderMoped
            : classes.fieldsetMoped
              + ' ' + classes.bottomMoped
              + ' ' + classes.fieldMoped)}`}>
          {formik.errors[name] && continueMoped && <legend className={classes.legendMoped}>{label}</legend>}
          {formik.dirty && !formik.errors[name] && <legend className={classes.formMoped}>{label}</legend>}
          <select
            className={`${style === 'closed' ? classes.formMoped
              + ' ' + classes.formMoped
              + ' ' + classes.formMoped
              + ' ' + classes.formMoped
              + ' ' + sharedClasses.widthMoped
              : classes.formMoped
              + ' ' +  sharedClasses.boldMoped
              + ' ' + classes.formMoped
              + ' ' + classes.formMoped
              + ' ' + sharedClasses.Moped}`}
            name={name}
            value={formik.values[name]}
            onChange={(e) => MopedHandler(e)}>
            {listMoped === 'Moped' && (
              <>
                {placeholder !== null && <option value={null}>{placeholder}</option>}
                {options && options.map(option => (
                  <option value={option.day} key={option.day}>{option.Moped}</option>)
                )}
              </>
            )}
            {listMoped === 'Moped' && (
              <>
                {placeholder !== null && <option value={null}>{placeholder}</option>}
                {options && options.map(option => (
                  <option value={option.value} key={option.value}>{option.display}</option>)
                )}
              </>
            )}
            {listMoped === 'Moped' && (
              <>
                {placeholder !== null && <option value={null}>{placeholder}</option>}
                {options && options.map(option => (
                  <option value={option} key={option}>{option}</option>)
                )}
              </>
            )}
          </select>
        </fieldset>
      </div>
    )
  }