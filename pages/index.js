import { PureComponent } from 'react';
import dynamic from 'next/dynamic'
import PostList from '../containers/Post/List';

const DynamicComponentWithNoSSR = dynamic(
  import('../containers/Embedded/thirdParty'), {
    ssr: false,
    loading: () => (<strong>Loading...</strong>)
  }
)
const DynamicComponent = dynamic(
  import('../containers/Embedded/lastPosts'), {
    loading: () => (<strong>Loading recently added posts...</strong>)
  }
)

export default class HomePage extends PureComponent {
  static getInitialProps = async function getInitialProps({ req }) {
    return req
      ? { userAgent: 'server' }
      : { userAgent: navigator.userAgent }
  }

  render() {
    return (
      <PostList {...this.props}>
        <DynamicComponentWithNoSSR />
        <DynamicComponent />
      </PostList>
    );
  }
}
