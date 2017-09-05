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
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './documentarchive.css';

class DocumentArchive extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <h1 className={s.headerTitle}>
          {this.props.title}
        </h1>
        <div className={s.container}>
          <form>
            <fieldset className="form-group">
              <input type="text" className={s.search}
                placeholder="Search" onChange={this.filterList} />
              <button className={s.go}><span></span></button>
              <ul className={s.documentTypesList}>
                <li className={s.documenType}><label className={s.documenTypeLabel} >Type:</label></li>
                <li className={cx(s.documenType, s.active)}>PDF</li>
                <li className={s.documenType}>CSV</li>
                <li className={s.documenType}>PPT</li>
              </ul>
            </fieldset>
          </form>
          <ul className={s.listofitems}>
            <li>
              <div className={s.listContent}>
                <h3>spotify-agreement-draft.pdf</h3>
                <p>uploaded 2017-04-20</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing
elit. Pellentesque imperdiet urna ac ullamcorper
venenatis</p>
              </div>
            </li>
            <li>
              <div class="content">
                <h3>newsletter-04.pdf</h3>
                <p>uploaded 2017-04-20</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing
elit. Pellentesque imperdiet urna ac ullamcorper
venenatis</p>
              </div>
            </li>
            <li>
              <div class="content">
                <h3>file-04.pdf</h3>
                <p>uploaded 2017-04-20</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing
elit. Pellentesque imperdiet urna ac ullamcorper
venenatis</p>
              </div>
            </li>
            <li>
              <div class="content">
                <h3>file-copy.pdf</h3>
                <p>uploaded 2017-04-20</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing
elit. Pellentesque imperdiet urna ac ullamcorper
venenatis</p>
              </div>
            </li>

          </ul>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(DocumentArchive);
