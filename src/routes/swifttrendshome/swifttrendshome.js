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
import s from './swifttrendshome.css';
import AutoSuggestComponent from '../../components/autosuggest';

import { Glyphicon } from 'react-bootstrap';

class swifttrendshome extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };


  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h2 className={s.trendsHomeHeader}>
            Which artist would you like to follow?
            </h2>
            <AutoSuggestComponent className={s.autoSuggestComponent}/>
        </div>
        <div className={s.SubRoot}>

        <div className={s.containerList}>
          <h2>Your followed artists</h2>
          <p className={s.blackBorderBottom}>You will receive alerts and notifications on these artist's trending tracks
            <span className={s.settingsIcon}><Glyphicon glyph="cog" /></span>
          </p>
          <div className={s.listOfArtists}>
            <div className={s.listItems}>
              <a href='#'>Olivia Holt</a>
            </div>
            <div className={s.listItems}>
              <a href='#'>Rihanna</a>
            </div>
            <div className={s.listItems}>
              <a href='#'>Drake</a>
            </div>
            <div className={s.listItems}>
                <a href='#'>Justin Bieber</a>
            </div>
            <div className={s.listItems}>
              <a href='#'>KFK</a>
            </div>
            <div className={s.listItems}>
              <a href='#'>Tove Lo</a>
            </div>
            </div>
            </div>

      </div>
      </div>
    );
  }
}

export default withStyles(s)(swifttrendshome);