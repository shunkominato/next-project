import Link from "next/link"
import { VFC } from "react"

export interface IPostsProps {
  post: any
}
export const Post: VFC<IPostsProps> = ({post}: IPostsProps) => {
  return (
    <div>
      <span>{post.id}</span>
      {" : "}
      <Link href={`/posts/${post.id}`}>
        <span className="cursor-pointer text-blue-500 border-b border-blue-500 hover:bg-gray-200">
          {post.title}
        </span>
      </Link>
    </div>
  )
}
