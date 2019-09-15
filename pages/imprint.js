/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Head from '../components/head'
import Nav from '../components/Nav'

const Imprint = () => (
  <>
    <Head title="Tobias Timm (@TbsTimm) - Imprint" />
    <Nav />
    <section
      css={css`
        max-width: 55rem;
        padding-left: 1.6rem;
        padding-right: 1.6rem;
        padding-top: 12rem;
        margin: 0px auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        line-height: 1.5;
      `}
    >
      <div>
        <h2>IMPRINT</h2>
      </div>
      <div>
        <div
          css={css`
            font-weight: bold;
          `}
        >
          Contact
        </div>
        <a
          css={css`
            &:after {
              white-space: pre-wrap;
              content: attr(data-name) '\00000a' attr(data-street) '\00000a' attr(data-city);
            }
          `}
          data-name="Tobias Timm"
          data-street="Beethovenstraße 9"
          data-city="86150 Augsburg"
        ></a>
        <br /> <br />
        <div css={css`
            font-weight: bold;
          `}>Email</div>
        <a
          css={css`
            &:after {
              content: attr(data-name) '@' attr(data-domain) '.' attr(data-tld);
            }
          `}
          data-name="tbs.timm"
          data-domain="gmail"
          data-tld="com"
        ></a>
        <br /> <br />
        <div>
          <strong> © Tobias Timm 2018-2019</strong>
        </div>
      </div>
    </section>
  </>
)

export default Imprint
