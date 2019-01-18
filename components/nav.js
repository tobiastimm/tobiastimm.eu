import React from 'react'
import Link from 'next/link'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import elevation from './styles/elevation'

const Nav = () => (
  <nav
    css={css`
      display: flex;
      background: #262b3b;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 9;
      transition: background 250ms ease-in-out 0s,
        box-shadow 250ms ease-in-out 0s;
      ${elevation[2]};
      padding: 1.6rem 0;
    `}
  >
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        padding-top: 0.4rem;
        padding-bottom: 0.4rem;
        width: 100%;
        max-width: 55rem;
        padding-left: 1.6rem;
        padding-right: 1.6rem;
        margin: 0 auto;
      `}
    >
      <h4
        css={css`
          margin: 0;
        `}
      >
        Tobias Timm
      </h4>
      <ul
        css={css`
          margin: 0;
          display: flex;
          align-items: stretch;
          list-style-type: none;

          li {
            cursor: pointer;
            margin: 0 1.5rem;
          }
        `}
      >
        <li>
          <Link prefetch href="/blog">
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <Link prefetch href="/cv">
            <a>Curriculum Vitae</a>
          </Link>
        </li>
        <li>
          <Link prefetch href="/cv">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Nav
