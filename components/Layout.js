import React from 'react';

/** @jsx jsx */
import { jsx, Global, css } from '@emotion/core';

const Layout = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          html {
            box-sizing: border-box;
            font-size: 10px;
          }

          html,
          body,
          #__next {
            height: 100%;
            width: 100%;
          }

          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }

          body {
            padding: 0;
            margin: 0;
            font-size: 1.5rem;
            line-height: 2;
            background-color: #171d2b;
            color: #d4d4d4;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
              Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
              sans-serif;
            min-height: 100%;
          }

          a {
            text-decoration: none;
            color: #d4d4d4;
            transition: color 250ms ease-in-out 0s;
            &:hover {
              color: #ffedcb;
            }
          }
        `}
      />
      {children}
    </>
  );
};

export default Layout;
