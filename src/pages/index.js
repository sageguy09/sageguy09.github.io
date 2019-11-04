import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub, faTwitter, faMedium, faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import Layout from 'components/Layout';
import SEO from 'components/SEO';

const Home = () => (
  <Layout>
    <SEO
      description="Front-end developer, developing apps and web pages"
      keywords="React, Node, Gatsby, Front-end, developer, API"
    />
    <figure className="photo image is-128x128">
      <StaticQuery
        query={graphql`
          query {
            file(relativePath: { eq: "SageHeadShot.jpg" }) {
              childImageSharp {
                fixed(width: 128, height: 128) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        `}
        render={data => (
          <Img
            fixed={data.file.childImageSharp.fixed}
            imgStyle={{ borderRadius: '100%' }}
            alt="Ryan Sage"
          />
        )}
      />
    </figure>
    <h1 className="title has-text-centered has-text-light">Ryan Sage</h1>
    <h2 className="subtitle has-text-centered has-text-warning">Software Engineer</h2>
    <div className="has-text-centered">
      <a href="https://github.com/sageguy09" aria-label="github">
        <span className="icon is-large fa-2x">
          <FontAwesomeIcon icon={faGithub} />
        </span>
      </a>
      <a href="https://twitter.com/sageguyvg" aria-label="twitter">
        <span className="icon is-large fa-2x">
          <FontAwesomeIcon icon={faTwitter} />
        </span>
      </a>
      <a href="https://medium.com/@ryansage09" aria-label="medium">
        <span className="icon is-large fa-2x">
          <FontAwesomeIcon icon={faMedium} />
        </span>
      </a>
      <a href="https://www.linkedin.com/in/RyanSageATL" aria-label="linkedin">
        <span className="icon is-large fa-2x">
          <FontAwesomeIcon icon={faLinkedin} />
        </span>
      </a>
    </div>
    <section className="section content is-size-4-desktop is-size-5-touch">
      <h4 className="title has-text-light">
        Hello, I am Ryan Sage!
        {' '}
        <span role="img" aria-label="wave">
          👋
        </span>
      </h4>
      <p>
        {`I'm a full stack engineer, with a passion for developing practical and unique web applications.
        I enjoy learning through problem solving and working with all things technology. `}
      </p>
      <p>
        I have expierence projects using JavaScript using React and Node and various backends such as Django, Express, and Koa.  
      </p>
      <p>
        Check out my
        {' '}
        <Link to="/projects">projects</Link>
        .
      </p>
    </section>
  </Layout>
);

export default Home;
