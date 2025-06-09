import React, { type ChangeEvent } from 'react'
import { useTheme } from '../../contexts/ThemeContext'

type SelectOption = {
  value: string,
  text: string,
}

type SelectProps = {
  defaultValue: string,
  options: Array<SelectOption>,
  action: (value: string) => void,
}

const Select: React.FC<SelectProps> = ({ defaultValue, options, action }: SelectProps) => {
  const themeStyles = useTheme().themeStyles;

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    action(e.currentTarget.value);
  }

  return (
    <select
      defaultValue={defaultValue}
      className='px-2 py-1 rounded-sm border border-solid'
      style={{
        borderColor: themeStyles.palette.components.accent,
        color: themeStyles.palette.text.secondary
      }}
      onChange={(e) => handleChange(e)}
    >
      {
        options.map((item: SelectOption) => <option value={item.value}>{item.text}</option>)
      }
    </select>
  )
}

export default Select
