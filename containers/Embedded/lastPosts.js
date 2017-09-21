import { PureComponent } from 'react';

export default class LastPosts extends PureComponent {
  state = {
    lastPosts: ['post1', 'post2']
  }

  componentDidMount() {
    this.setState({
      lastPosts: ['post3', 'post2']
    })
  }

  render() {
    const { lastPosts } = this.state;

    return (
      <section className="last-posts">
        <ul>
          {lastPosts.map((post, idx) => <li>{post}</li>)}
        </ul>

        <style jsx>{`
          .last-posts li {
            background: red;
          }
        `}</style>
      </section>
    );
  }
}
