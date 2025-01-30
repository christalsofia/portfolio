import { CustomButtonProps } from '@/types'
import React from 'react'

const CustomButton = ({
  icon,
  title,
  containerStyles,
  handleClick}: CustomButtonProps
) => {
  const hoverStyle = 'hover:transition duration-300'
  const combinedStyles = `${containerStyles} ${hoverStyle}`

  return (
    <button
      className={combinedStyles}
      onClick={handleClick}
    >
      {title}
      {icon}
    </button>
  );
}

export default CustomButton