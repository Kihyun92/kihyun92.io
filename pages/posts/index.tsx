import PostType from 'interfaces/post';
import { getAllPosts } from 'lib/api';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

type Props = {
  posts: PostType[];
};

const PostsPage: NextPage<Props> = ({ posts }) => {
  const router = useRouter();
  console.log('router::: ', router);

  const handlePostClick = (slug: string) => {
    router.push(`/posts/${slug}`)
  }

  return (
    <div>
      <h1 className="text-lg">Post list</h1>
      <div>
        {posts.map((post) => (
          <div key={post.slug} className="py-4" onClick={() => handlePostClick(post.slug)}>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const posts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt'
  ]);

  return {
    props: { posts }
  };
};

export default PostsPage;
