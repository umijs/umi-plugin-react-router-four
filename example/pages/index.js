import React from 'react';
import propTypes from 'prop-types';
import styles from './index.css';

export default class extends React.Component {
  static contextTypes = {
    router: propTypes.object,
  }
  render() {
    const { history, route } = this.context.router;
    return (
      <div className={styles.normal}>
        <h1>Page index</h1>
        <h2>matched path: {route.match.path}</h2>
      </div>
    );
  }
}
