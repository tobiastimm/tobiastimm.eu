import React from 'react'
import Link from 'next/link'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import elevation from './styles/elevation'

const Main = () => {
  return (
    <div
      css={css`
        max-width: 55rem;
        padding-left: 1.6rem;
        padding-right: 1.6rem;
        margin: 0px auto;
      `}
    >
      <main
        css={css`
          display: flex;
          flex-direction: column;
          -webkit-box-align: center;
          align-items: center;
        `}
      />
    </div>
  )
}

export default Main
