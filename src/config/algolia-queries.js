const artQuery = `
  {
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "art"}}}) {
      nodes {
        id
        internal {
          contentDigest
        }
        frontmatter {
          title
          category
          technique
          date
          image {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 300)
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
        internal {
          contentDigest
        }
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
        internal {
          contentDigest
        }
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
        internal {
          contentDigest
        }
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
        internal {
          contentDigest
        }
        frontmatter {
          title
        }
      }
    }
  }
`;

// Helper functie om objectID toe te voegen
const addObjectID = (nodes) =>
  nodes.map((node) => ({
    ...node,
    objectID: node.id, // Gebruik de unieke Gatsby ID als objectID
    contentDigest: node.internal?.contentDigest || null, // Voeg contentDigest toe, indien aanwezig
  }));

const queries = [
  {
    query: artQuery,
    transformer: ({ data }) => {
      const transformedData = addObjectID(data.allMarkdownRemark.nodes || []);
      console.log("Transformed Data for Algolia:", transformedData); // Debug output
      return transformedData;
    },
    indexName: process.env.ALGOLIA_INDEX_NAME_ART || "default_art_index",
  },
  {
    query: bioQuery,
    transformer: ({ data }) => addObjectID(data.allMarkdownRemark.nodes || []),
    indexName: process.env.ALGOLIA_INDEX_NAME_BIO || "default_bio_index",
  },
  {
    query: colQuery,
    transformer: ({ data }) => addObjectID(data.allMarkdownRemark.nodes || []),
    indexName: process.env.ALGOLIA_INDEX_NAME_COL || "default_col_index",
  },
  {
    query: exhQuery,
    transformer: ({ data }) => addObjectID(data.allMarkdownRemark.nodes || []),
    indexName: process.env.ALGOLIA_INDEX_NAME_EXH || "default_exh_index",
  },
  {
    query: litQuery,
    transformer: ({ data }) => addObjectID(data.allMarkdownRemark.nodes || []),
    indexName: process.env.ALGOLIA_INDEX_NAME_LIT || "default_lit_index",
  },
];

module.exports = queries;
