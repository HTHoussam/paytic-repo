import axios from 'axios';
import { Suspense } from 'react';
import { useQuery } from 'react-query';

const fetchPosts = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return data;
};

const Posts = () => {
  const { data, isError, isLoading } = useQuery('posts', fetchPosts);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <ul>
          {data.map((post) => (
            <li key={post.title}>{post.title}</li>
          ))}
        </ul>
      </div>
    </Suspense>
  );
};
export default Posts;
