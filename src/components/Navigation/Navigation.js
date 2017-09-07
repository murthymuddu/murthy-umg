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
import s from './Navigation.css';
import Link from '../Link';

class Navigation extends React.Component {
  render() {
    return (
      <div className={s.root} role="navigation">
        <Link className={s.link}  to="/">
          Main
        </Link>
        <Link className={s.link} to="/documentarchive">
          Document Archive
        </Link>
        <Link className={s.link} to="/login">
          Swift Trends
        </Link>
        <Link className={cx(s.link, s.highlight)} to="/about">
          Swift Consumption
        </Link>
        <div className={s.navbarright}>
        <Link to="/accountinformation" className={s.dropdowntoggle} data-toggle="dropdown">
        <img src="http://placehold.it/24x24" className={cx(s.profileimage, s.imgcircle)}/> Account </Link>
      </div>
      </div>

    );
  }
}

export default withStyles(s)(Navigation);
