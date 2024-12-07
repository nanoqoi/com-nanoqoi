import type { MDXCustomMetadata } from '*.mdx'

// TODO: Figure out how to dynamically replace this or make a util that creates a barrel import instead.
import * as AboutMe from 'app/routes/($lang)/__auto/blog/post/about-me.mdx'
import * as Hi from 'app/routes/($lang)/__auto/blog/post/hi.mdx'
import * as MyJourneyInFlStudio from 'app/routes/($lang)/__auto/blog/post/my-journey-in-fl-studio.mdx'
import * as SomeOtherPost from 'app/routes/($lang)/__auto/blog/post/some-other-post.mdx'

export const posts = [AboutMe, Hi, MyJourneyInFlStudio, SomeOtherPost]

export const getPostByRequestUrl = async (requestUrl: string) => {
  const url = new URL(requestUrl)
  const slug = url.pathname.replace('/blog/post/', '')
  return posts.find((post) => post.metadata.slug === slug)
}
