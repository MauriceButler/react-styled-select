import React from 'react'
import SelectValueLabel from '../partials/SelectValueLabel'

export default (option, className) => {
  return (
    <SelectValueLabel
      key={option.key}
      multi={option.multi}
      className={className}
      data-select-value-label>{option.label}
    </SelectValueLabel>
  )
}
