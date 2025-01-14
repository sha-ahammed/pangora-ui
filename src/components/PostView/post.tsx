import { getComments, getPost } from '@/shared/libs/Lemmy/post'
import { CommentsView } from '../CommentsView'
import SidebarCommunity from '../SidebarCommunity'
import { PostViewNode } from './PostViewNode'
import SidebarSite from '../SidebarSite'
import { getRelativeCommunityLink } from '@/shared/libs/Lemmy/community'

export default async function PostView({ id }: { id: number }) {
  const post = await getPost({ id: id })
  const comments = await getComments({ post_id: id, limit: 50, type_: 'All' })

  return (
    <div className="flex">
      <div className="w-full md:w-2/3">
        <PostViewNode post={post} />
        <CommentsView comments={comments} post={post} />
      </div>
      <div className="w-0 md:w-1/3">
        <SidebarCommunity
          slug={
            post?.community_view.community.local
              ? post?.community_view.community.name
              : getRelativeCommunityLink(post?.community_view).slice(3)
          }
        />
        <SidebarSite />
      </div>
    </div>
  )
}
