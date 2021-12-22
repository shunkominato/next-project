import { VFC } from "react"
import { Layout } from "../components/Layout"
import { Post } from "../components/Post"
import { getAllPostsData } from "../lib/posts"

export interface IPostsProps {
  posts: any
}

export const Blog: VFC<IPostsProps> = ({posts}: IPostsProps) => {
  return (
    <Layout title="blog">
      <ul className="m-10">
      {posts && posts.map((post:any) => <Post key={post.id} post={post}/>)}
      </ul>
    </Layout>
  )
}

export default Blog

export const getStaticProps = async() => {
  const posts = await getAllPostsData();
  return {
    props: {
      posts
    }
  }
}