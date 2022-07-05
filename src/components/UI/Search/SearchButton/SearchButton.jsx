import React from 'react'

export const SearchButton = ({children, ...props}) => {
  return (
    <button {...props} className='search-button'>{children}</button>
  )
}
