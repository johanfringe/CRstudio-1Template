const artQuery = `
  {
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "art"}}}) {
      nodes {
        id
        frontmatter {
          title
          category
          technique
          date
          image {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, width: 150)
            }
          }
        }
      }
    }
  }
`;

const bioQuery = `
  {
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "bio"}}}) {
      nodes {
        id
        frontmatter {
          title
        }
      }
    }
  }
`;

const colQuery = `
  {
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "col"}}}) {
      nodes {
        id
        frontmatter {
          title
        }
      }
    }
  }
`;

const exhQuery = `
  {
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "exh"}}}) {
      nodes {
        id
        frontmatter {
          title
        }
      }
    }
  }
`;

const litQuery = `
  {
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "lit"}}}) {
      nodes {
        id
        frontmatter {
          title
        }
      }
    }
  }
`;

const queries = [
  {
    query: artQuery,
    transformer: ({ data }) => data.allMarkdownRemark.nodes || [],
    indexName: process.env.ALGOLIA_INDEX_NAME_ART || "default_art_index", // Gebruik een fallback
  },
  {
    query: bioQuery,
    transformer: ({ data }) => data.allMarkdownRemark.nodes || [],
    indexName: process.env.ALGOLIA_INDEX_NAME_BIO || "default_bio_index",
  },
  {
    query: colQuery,
    transformer: ({ data }) => data.allMarkdownRemark.nodes || [],
    indexName: process.env.ALGOLIA_INDEX_NAME_COL || "default_col_index",
  },
  {
    query: exhQuery,
    transformer: ({ data }) => data.allMarkdownRemark.nodes || [],
    indexName: process.env.ALGOLIA_INDEX_NAME_EXH || "default_exh_index",
  },
  {
    query: litQuery,
    transformer: ({ data }) => data.allMarkdownRemark.nodes || [],
    indexName: process.env.ALGOLIA_INDEX_NAME_LIT || "default_lit_index",
  },
];

module.exports = queries;
