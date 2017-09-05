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
import s from './Home.css';
import homeBanner from './umg-data-world-map.png';

class Home extends React.Component {
  static propTypes = {
    news: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        content: PropTypes.string,
      }),
    ).isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <img src={homeBanner} className={s.homeBanner} />
        <div className={s.container}>
          <h1 className={s.newsTitle}>
            Welcome
              </h1>
          <article className={s.newsItem}>
            <div className={s.newsDesc}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ipsum nisi, porttitor nec feugiat viverra, condimentum non
velit. Pellentesque ut tempus ante. Nam ultrices id odio vel finibus. Duis venenatis ut eros dignissim porttitor. Vivamus eget
dui quis quam lobortis suscipit ut et dolor. Nullam eget ultricies enim, sit amet aliquet massa. Vivamus in dignissim metus,
quis accumsan mi. Donec egestas mattis elit sed mollis. In hac habitasse platea dictumst. Cras id erat quis lectus ultrices
porttitor. Vestibulum urna nunc, dapibus eu diam et, convallis porttitor urna</p>
              <p>Vestibulum ullamcorper blandit nisi, rutrum pharetra nisi. Suspendisse vitae rutrum augue, in facilisis augue. In nec congue
ipsum. Aliquam erat volutpat. Fusce velit magna, laoreet eu auctor et, maximus a purus. Phasellus vel elit eget neque
tristique molestie. Mauris sollicitudin molestie dui nec rhoncus. Cras eget semper nunc. Etiam nec aliquet eros, in
condimentum augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque
egestas sem quis sapien faucibus, et placerat turpis elementum. Fusce cursus scelerisque porttitor.</p>
              <p>
                Phasellus sodales efficitur nisl semper pretium. Pellentesque non nulla ac urna facilisis varius vitae ac lorem. Nulla quis
augue nisl. Curabitur elementum eros sagittis dapibus tincidunt. Phasellus a scelerisque ligula. Mauris iaculis, dui eget
rhoncus vestibulum, ex tellus ornare neque, quis sollicitudin libero felis sed metus. Aliquam quis elit ut sapien lobortis
ultrices. Praesent in mattis sapien. Phasellus nisi justo, varius eget velit id, semper consectetur nulla. Phasellus in velit vitae
velit tristique vehicula. Integer tempus auctor turpis, id auctor mi consectetur ut. Aenean vulputate, velit in tempor
consequat, velit enim aliquam ex, sit amet vestibulum arcu ligula at erat
  </p>
              <p>Contact us at: <a href="mailto:data@music.com">data@umusic.com</a></p>
            </div>
          </article>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
