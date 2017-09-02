import { PureComponent } from 'react';
import PostList from '../containers/Posts'

export default class extends PureComponent {
  static async getInitialProps({ req }) {
    return req
      ? { userAgent: 'server' }
      : { userAgent: navigator.userAgent }
  }

  render() {
    return <PostList {...this.props} />;
  }
}
