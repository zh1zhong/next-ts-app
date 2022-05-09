import React, { useEffect, memo } from 'react'

const Header = () => {
  useEffect(() => {
    console.log(2)
    return () => {
      console.log(-2)
    }
  }, [])

  return <div>header</div>
}

export default Header
