import React from 'react';
import Helmet from 'react-helmet';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Title from 'components/Title';


const Stack = () => (
  <Layout>
    <SEO
      pageTitle="Stack"
      description="Software Engineer, with a passion for developing practical applicaions"
      keywords="React, Node, Gatsby, Front-end, developer"
    />
    <Helmet>
      <script
        async
        src="https://cdn1.stackshare.io/javascripts/client-code.js"
        charset="utf-8"
      />
    </Helmet>
    <section className="section is-size-4-desktop is-size-5-touch">
      <Title>Stack</Title>
      <div className="has-text-centered">
        <p className="content">
          I have experience with many modern tools,
          I select them for my projects depending on the usage.
        </p>
        <p className="content">Here is my stack on StackShare:</p>
        <div className="columns is-centered">
          <div className="column is-half">
            <a 
            frameborder="0" 
            data-theme="dark" 
            data-layers="1,2,3,4" 
            data-stack-embed="true" 
            href="https://embed.stackshare.io/stacks/embed/7089f367f547e1489391e8626c9d1b">
              StackShare
            </a>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Stack;

