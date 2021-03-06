/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import profilePic from '../../content/assets/profile-pic.jpg';

import { rhythm } from '../utils/typography';

function Bio() {
    return (
        <StaticQuery
            query={bioQuery}
            render={data => {
                const { author, social } = data.site.siteMetadata;
                return (
                    <div
                        style={{
                            display: `flex`,
                            marginBottom: rhythm(2.5),
                        }}
                    >
                        <img
                            src={profilePic}
                            alt={`Dylan Moberg`}
                            style={{
                                marginRight: rhythm(1 / 2),
                                marginBottom: 0,
                                width: rhythm(2),
                                height: rhythm(2),
                                borderRadius: '50%',
                            }}
                        />
                        <p>
                            A place for{' '}
                            <a href={`https://twitter.com/${social.twitter}`}>
                                {' '}
                                {author}{' '}
                            </a>{' '}
                            to discuss <br /> his two loves, coding and
                            baseball.
                            {` `}
                        </p>
                    </div>
                );
            }}
        />
    );
}

const bioQuery = graphql`
    query BioQuery {
        avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
            childImageSharp {
                fixed(width: 50, height: 50) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        site {
            siteMetadata {
                author
                social {
                    twitter
                }
            }
        }
    }
`;

export default Bio;
