/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

// external-global styles must be imported in your JS.
import normalizeCss from 'normalize.css';
import s from './LayoutTrends.css';
import Link from '../Link';
import NavigationTrends from '../NavigationTrends';

class LayoutTrends extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div>
        <div className={s.root}>
          <div className={s.container}>
            <div className={s.brandTextContainer}>
              <Link className={s.brand} to="/">
                <span className={s.brandTxt}>
                  <span className={s.bold}>UMG |</span> Swift Trends
                </span>
              </Link>
            </div>
            <NavigationTrends />
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default withStyles(normalizeCss, s)(LayoutTrends);
