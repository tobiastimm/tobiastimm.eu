/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const List = ({ children, align = 'space-between' }) => {
  return (
    <ul
      css={css`
        margin: 0;
        padding: 0;
        width: 100%;
        display: flex;
        justify-content: ${align};
        list-style-type: none;

        li {
          text-align: center;
          transform: translate3d(0, 0, 0);
          cursor: pointer;
          padding: 1rem;
        }
        a {
          display: flex;
          justify-content: center;
          align-items: center;
          vertical-align: middle;

          svg {
            margin-right: 1rem;
          }
        }
      `}
    >
      {children}
    </ul>
  )
}

export default List
