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
    post1: file(relativePath: { eq: "fir-dev-station.jpg" }) {
      childImageSharp {
        fixed(width: 96, height: 96) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

const Blog = ({ data }) => (
  <Layout>
    <SEO
      pageTitle="Blog"
      description="Software Engineer, creating unique and practical applicatoins"
      keywords="React, Node, Full Stack, Engineer, Django, Express, API"
    />
    <section className="section is-size-4-desktop is-size-5-touch">
      <Title>Blog</Title>
      <p className="has-text-centered">
        Follow me on
        {' '}
        <a href="https://twitter.com/sageguyvg">
          Twitter
        </a>
        {' '}
        and
        {' '}
        <a href="https://medium.com/@ryansage09">
          Medium
        </a>
        {'.'}
      </p>
      <div className="columns is-centered">
        <div className="column is-half">
          <Card
            title="Taking the pluge into a new career in Software Engineering"
            subtitle="A short recap of my tranformational journey into becoming a software engineer"
            link="https://medium.com/@ryansage09/taking-the-plunge-into-a-new-career-in-software-engineering-711e9617d708"
            tags={['Software Engineering', 'Self Developement', 'General Assembly']}
            image={<Img fixed={data.post1.childImageSharp.fixed} alt="Mobile dev station" />}
          />
        </div>
      </div>
      <p className="has-text-centered">
        Check out my
        {' '}
        <Link to="/stack">stack</Link>
        .
      </p>
    </section>
  </Layout>
);

Blog.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Blog;
