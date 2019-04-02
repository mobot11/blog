import React from 'react';

import { rhythm } from '../utils/typography';

class Footer extends React.Component {
    render() {
        return (
            <footer
                style={{
                    marginTop: rhythm(2.5),
                    paddingTop: rhythm(1),
                }}
            >
                <div style={{ display: 'flex' }}>
                    <a
                        style={{ paddingRight: '5px' }}
                        href="https://twitter.com/mobot11"
                    >
                        Twitter
                    </a>{' '}
                    &bull;
                    <a
                        style={{ padding: '0 5px' }}
                        href="https://github.com/mobot11"
                    >
                        GitHub
                    </a>{' '}
                    &bull;
                    <a
                        style={{ paddingLeft: '5px' }}
                        href="http://dylanmoberg.com"
                    >
                        Website
                    </a>
                </div>
            </footer>
        );
    }
}

export default Footer;
