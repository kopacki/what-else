import { PureComponent } from 'react';
import Post from '../containers/Post/Single';

export default class PostPage extends PureComponent {
  render() {
    return <Post {...this.props} />;
  }
}
