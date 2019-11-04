import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Card from 'components/Card';
import Title from 'components/Title';

export const queryImage = graphql`
  query {
    propject1: file(relativePath: { eq: "blackjack.png" }) {
      childImageSharp {
        fixed(width: 96, height: 96) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    project2: file(relativePath: { eq: "euchre.png" }) {
      childImageSharp {
        fixed(width: 96, height: 96) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    project3: file(relativePath: { eq: "FiveInARow.png" }) {
      childImageSharp {
        fixed(width: 96, height: 96) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    project4: file(relativePath: { eq: "slack-parrot.png" }) {
      childImageSharp {
        fixed(width: 96, height: 96) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

const Projects = ({ data }) => (
  <Layout>
    <SEO
      pageTitle="Projects"
      description="Front-end developer, developing apps and web pages"
      keywords="React, Node, Gatsby, Front-end, developer, API"
    />
    <section className="section is-size-4-desktop is-size-5-touch">
      <Title>Projects</Title>
      <p className="has-text-centered">
        Below are a few of my projects developed in week long hackathons while in General Assembly's Software Engineering Immersive course, see more on my
        {' '}
        <a href="https://github.com/sageguy09">
          GitHub
        </a>
        .
      </p>
      <div className="columns is-centered">
        <div className="column is-half">
          <Card
            title="Blackjack"
            subtitle="Classic Blackjack. My first developement project. Developed with raw javascript and dom manipulation"
            link="https://github.com/sageguy09/ga-project1-blackjack"
            tags={['Javascript']}
            image={<Img fixed={data.propject1.childImageSharp.fixed} alt="Javascript Blackjack" />}
          />
          <Card
            title="Euchre 500"
            subtitle="A web app that allows Euchre groups to track their group scores over time within a long standing game. Developed with Node, Express, and Javascript"
            link="https://github.com/sageguy09/Euchre500"
            tags={['Express', 'Javascript']}
            image={<Img fixed={data.project2.childImageSharp.fixed} alt="Euchre Logo" />}
          />
          <Card
            title="Five In A Row"
            subtitle="A boardgame invented by my Grandmother. The web app features an online lobby and multiplayer with up to 3 players. Developed with React, Koa, and boardgame.io (a game engine for react)"
            link="https://github.com/sageguy09/Five-In-A-Row-Refactor"
            tags={['React', 'Koa','boardgame.io']}
            image={<Img fixed={data.project3.childImageSharp.fixed} alt="Five In A Row gameboard" />}
          />
          <Card
            title="Pintecipe"
            subtitle="A web app to easily import recipes, create custom recipe collections, and integrate with Pinterest. Developed with Bulma, Django, Django Rest Framework, DjangoJWT, and React."
            link="https://github.com/sageguy09/Pintecipe"
            tags={['Django', 'DjangoJWT','Django Rest Framework', 'React', 'Bulma']}
            image={<Img fixed={data.project4.childImageSharp.fixed} alt="Party parrot animation" />}
          />
        </div>
      </div>
      {/* <p className="has-text-centered">
        Check out my
        {' '}
        <Link to="/blog">blog</Link>
        .
      </p> */}
    </section>
  </Layout>
);

Projects.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Projects;
