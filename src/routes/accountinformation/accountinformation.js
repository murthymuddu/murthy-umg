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
import s from './accountinformation.css';

class Login extends React.Component {
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
          <form method="post">
            <div className={s.formHeaderGroup}>
              <h2 className={s.formHeader}>
                Profile Information
                </h2>
            </div>
            <div className={s.formFieldsContainer}>
              <div className={s.formFieldsGroup}>
                <div className={s.formGroupRow}>
                  <div className={s.formGroupLeft}>
                    <div className={s.formGroup}>
                      <label>Name</label>
                      <span>Jane Doe</span>
                    </div>
                  </div>
                  <div className={s.formGroupright}>
                    <div className={s.formGroup}>
                      <label>Default Territory</label>
                      <span className={s.selectBoxContainer}>
                        <select name="default-teritory">
                          <option>Global</option>
                        </select>
                      </span>
                    </div>
                  </div>
                </div>
                <div className={s.formGroupRow}>
                  <div className={s.formGroupLeft}>
                    <div className={s.formGroup}>
                      <label>Email</label>
                      <span>jane@janedoe.com</span>
                    </div>
                  </div>
                  <div className={s.formGroupright}>
                    <div className={s.formGroup}>
                      <label>Default Label</label>
                      <span className={s.selectBoxContainer}>
                        <select name="default-teritory">
                          <option>All labels</option>
                        </select>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={s.formHeaderGroup}>
              <h2 className={s.formHeader}>
                Short Questionnarie
                </h2>
            </div>
            <div className={cx(s.formFieldsContainer, s.shortQuestionnarie)}>
              <div className={s.formFieldsGroup}>
                <div className={s.formGroupRow}>
                  <div className={s.formGroup}>
                    <label>Which artist to you look after?</label>
                    <span>
                      <input type="text" placeholder="Search:artists..." />
                    </span>
                  </div>
                </div>
                <div className={s.formGroupRow}>
                  <div className={s.formGroup}>
                    <label>Which country do you work in?</label>
                    <span className={s.selectBoxContainer}>
                      <select>
                        <option>Choose teritory...</option>
                      </select>
                    </span>
                  </div>
                </div>
                <div className={s.formGroupRow}>
                  <div className={s.formGroup}>
                    <label>Which countries of intrest to you?</label>
                    <span>
                      <textarea defaultValue=" List them here...">
                       
                      </textarea>
                    </span>
                  </div>
                </div>
                <div className={s.formGroupRow}>
                  <div className={s.formGroup}>
                    <label>Are you intrested in an artist's international per-formance, or only local?</label>
                    <span className={s.selectBoxContainer}>
                      <select >
                        <option>Choose one...</option>
                      </select>
                    </span>
                  </div>
                </div>
                <div className={s.formGroupRow}>
                  <div className={s.formGroup}>
                    <label>Do you work catalogue or frontline?</label>
                    <span className={s.selectBoxContainer}>
                      <select>
                        <option>Choose one...</option>
                      </select>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={s.formHeaderGroup}>
              <h2 className={s.formHeader}>
                Artist you look after ...
                </h2>
            </div>
            <div className={s.formFieldsContainer}>
              <div className={s.formFieldsGroup}>
                <div className={s.selectedArtistsBlock}>
                </div>
              </div>
            </div>
            <div className={s.formFieldsButtonsWrapper}>
              <button type="button"  className={cx(s.btn, s.btnYellow)}>next</button>
            </div>
        
            <div className={s.formHeaderGroup}>
              <h2 className={s.formHeader}>
                Notifications & Alerts
                </h2>
            </div>
            <div className={cx(s.formFieldsContainer, s.emailNotifications)}>
              <div className={cx(s.formFieldsGroup, s.emailNotificationsGroup)}>
                <h4>Email Notifications</h4>
                <div className={s.squaredThree }><input type="checkbox" name="newsalert" id="newsalertID"/><label htmlFor="newsalertID"><span></span>UMG Global Data & Analytics Newsletter</label></div>
                <div className={s.squaredThree }><input type="checkbox" name="emailalert" id="emailalertID"/><label htmlFor="emailalertID"><span></span>Email Alerts(i.e. When followed items surpass benchmarks) Analytics Newsletter</label></div>
                <div className={s.squaredThree }><input type="checkbox" name="globalpriority" id="globalpriorityID"/><label htmlFor="globalpriorityID"><span></span>Global Priorities Monthly</label></div>
              </div>
            </div>
            <div className={s.formFieldsButtonsWrapper}>
            <button type="button" className={cx(s.btn, s.btnGrey)}>back</button>
              <button type="submit" className={cx(s.btn, s.btnYellow)}>finish</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Login);