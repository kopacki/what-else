import PropTypes from 'prop-types';

import Single from './Single';

List.PropTypes = {
  posts: PropTypes.array
}

export default function List({ posts }) {
  return (
    <ul>
      {posts.map((post, idx) => <Single {...post} key={idx} />)}
    </ul>
  )
}
