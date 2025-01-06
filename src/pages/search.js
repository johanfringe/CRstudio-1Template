import React, { useState } from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const SearchPage = ({ data }) => {
  const [query, setQuery] = useState(""); // Zoekterm
  const files = data.allMarkdownRemark.edges;

  // Filter bestanden op basis van de zoekterm
  const filteredFiles = files.filter(({ node }) =>
    node.frontmatter.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h1>Zoeken</h1>
      <input
        type="text"
        placeholder="Zoek op titel..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ marginBottom: "20px", padding: "10px", width: "100%" }}
      />
      {filteredFiles.map(({ node }) => {
        const image = getImage(node.frontmatter.image?.childImageSharp?.gatsbyImageData);
        const altText = node.frontmatter.title || "Afbeelding";

        return (
          <div key={node.id} style={{ marginBottom: "20px" }}>
            {image ? (
              <GatsbyImage image={image} alt={altText} />
            ) : (
              <p>Geen afbeelding beschikbaar</p>
            )}
            <h2>{node.frontmatter.title}</h2>
            <p>{node.frontmatter.date}</p>
          </div>
        );
      })}
    </div>
  );
};

export const query = graphql`
  query SearchData {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            date
            image {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }
  }
`;

export default SearchPage;
