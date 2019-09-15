/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Link from 'next/link'
import { GitHub, Linkedin, Twitter, Info } from 'react-feather'
import elevation from './styles/elevation'
import List from './List'

const Main = () => {
  return (
    <div
      css={css`
        max-width: 55rem;
        padding-left: 1.6rem;
        padding-right: 1.6rem;
        padding-top: 12rem;
        margin: 0px auto;
      `}
    >
      <main
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: column;
            align-items: center;
          `}
        >
          <img
            css={css`
              height: 25rem;
              width: 25rem;
              border-radius: 175px;
            `}
            src="https://avatars1.githubusercontent.com/u/10043789?s=460&v=4"
          />

          <h4>Hey I'm Tobi! 👋</h4>
          <p>
            A software developer living in 🇩🇪 Augsburg. My career started as a
            C#, but I felt more comfortable in the Java section. During my time
            as a Java dev, I've created a prototype project with AngularJS and
            fell in ❤️ with the front-end development.
          </p>
          <p>
            Nowadays I'm working with JavaScript, react, react-native, node.js,
            GraphQL and all the other cool stuff 😉
          </p>
        </div>
        <List>
          <li>
            <a href="https://github.com/tobiastimm">
              <GitHub /> GitHub
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/tbstimm">
              <Linkedin /> LinkedIn
            </a>
          </li>
          <li>
            <a href="https://twitter.com/TbsTimm">
              <Twitter /> Twitter
            </a>
          </li>
        </List>
        <List align="center">
          <li>
            <Link href="/imprint">
              <a>Imprint</a>
            </Link>
          </li>
        </List>
      </main>
    </div>
  )
}

export default Main
