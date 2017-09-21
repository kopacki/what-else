import { PureComponent } from 'react';
import PostList from '../containers/Posts'

export default class HomePage extends PureComponent {
  static getInitialProps = async function getInitialProps({ req }) {
    return req
      ? { userAgent: 'server' }
      : { userAgent: navigator.userAgent }
  }

  render() {
    return <PostList {...this.props} />;
  }
}
