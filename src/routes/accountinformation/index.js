/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '../../components/Layout';
import AccountInformation from './accountinformation';

const title = 'Account Information';

function action() {
  return {
    chunks: ['accountinformation'],
    title,
    component: (
      <Layout>
        <AccountInformation title={title} />
      </Layout>
    ),
  };
}

export default action;
