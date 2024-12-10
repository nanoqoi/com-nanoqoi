// TODO: Figure out how to dynamically replace this or make a util that creates a barrel import instead.
import * as AboutMe from 'app/routes/($lang)/__auto/blog/post/about-me.mdx'
import * as a from 'app/routes/($lang)/__auto/blog/post/hello-world.mdx'

export const posts = [AboutMe, a]

export const getPostByRequestUrl = async (requestUrl: string) => {
  const url = new URL(requestUrl)
  const slug = url.pathname.replace('/blog/post/', '')
  return posts.find((post) => post.metadata.slug === slug)
}
