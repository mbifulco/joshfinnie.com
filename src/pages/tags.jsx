/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import kebabCase from 'lodash/kebabCase';

import Layout from '../components/Layout';

const TagsPage = ({ data: { allMarkdownRemark: { group } } }) => (
  <Layout>
    <div>
      <h1 className="text-center pt-3">Tags</h1>
      <div className="list-group pt-3">
        {group
          .sort((a, b) => b.totalCount - a.totalCount)
          .map((tag, i) => {
            const tagBadge = `${tag.totalCount} post${
              tag.totalCount === 1 ? '' : 's'
            }`;
            return (
              <Link
                key={i}
                to={`/tags/${kebabCase(tag.fieldValue)}/`}
                className="list-group-item list-group-item-action"
              >
                {tag.fieldValue}
                <span className="badge badge-primary badge-pill ml-2">{tagBadge}</span>
              </Link>
            );
          })
        }
      </div>
    </div>
  </Layout>
);

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired,
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }).isRequired,
};

export default TagsPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 2000
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
