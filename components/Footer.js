import React from 'react'
import Link from 'next/link'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import elevation from './styles/elevation'

const Footer = () => {
  return (
    <footer
      css={css`
        margin-top: 6.4rem;
        padding-top: 6.4rem;
        padding-bottom: 6.4rem;
        background-color: #262b3b;
        display: flex;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
      `}
    />
  )
}

export default Footer
