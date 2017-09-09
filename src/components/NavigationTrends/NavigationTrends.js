/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './NavigationTrends.css';
import Link from '../Link';

class NavigationTrends extends React.Component {
  render() {
    return (
      <div className={s.root} role="navigation">
        <Link className={s.link}  to="/swifttrends">
          Home
        </Link>
        <Link className={s.link} to="/swifttrends">
          Marketing / Creative
        </Link>
        <Link className={s.link} to="/swifttrends">
          Global Marketing
        </Link>
        <Link className={cx(s.link, s.highlight)} to="/swifttrends">
          Branding
        </Link>
        <Link className={s.link} to="/swifttrends">
          Catalogue
        </Link>
        <Link className={s.link} to="/swifttrends">
          Playlists
        </Link>
      </div>

    );
  }
}

export default withStyles(s)(NavigationTrends);
