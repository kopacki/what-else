import { PureComponent } from 'react';
import SinglePost from '../../components/Post/Single';

export default class Posts extends PureComponent {

  componentDidMount() {
    const post = {
      id: 'c30ag4e',
      label: 'Sample title of a blog post',
      createdAt: new Date().toISOString(),
      author: {
        firstName: 'Janusz',
        lastName: 'Tracz',
        gender: 'male',
        age: 38
      },
      content: `
      Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
      totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.
      Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit,
      sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt,
      neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit,
      sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem.

      Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
      nisi ut aliquid ex ea commodi consequatur?

      Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse,
      quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat,
      quo voluptas nulla pariatur?
      `
    }

    setTimeout(() => {
      this.setState({ post })
    }, 900);
  }

  render() {
    const { post } = this.state;

    if (!post) {
      return (
        <strong>Loading post...</strong>
      )
    }

    return (
      <SinglePost {...post} />
    );
  }
}
