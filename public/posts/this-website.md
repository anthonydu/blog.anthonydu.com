---
title: My First Blog Post! (The Technology Behind This Website and Some Thoughts)
author: Anthony Du
description: "The technology behind blog.anthonydu.com explained and some thoughts that came up while making this website."
date: "2023-07-01"
pinned: true
---

# The Technology Behind This Website and Some Thoughts

This website was bootstrapped with create-next-app with the TypeScript template. There are a lot of changes that came with version 13 of Next.js, so it took me a while to figure every new thing out since there aren't enough resources online yet. Although big changes in technologies are always hard, from what I have seen so far of Next.js 13, I think they are definitely heading in the right direction. I have to say, new App Router is somewhat more easier to use than what came with the older versions. I'm sure if they flesh things out it would be even better.

Gray-matter and react-markdown was used to parse and render markdown files stored at public/posts. 

Markdown files are used because it is widely used and very easy to edit. I have no idea if this is a common practice for blog websites, but I'm pretty proud of this implementation and that I actually got it to work within a day. 

Each markdown file has a header that contains metadata about the post. The headers contains information such as the title of the article which is what you see in your tab bar, as well as the author, the description which is what you see on Google or when you share the article on social media, and a pinned property which specifies if the article should be pinned to the top of the home page.

This website's source files are uploaded to [GitHub](https://github.com/anthonydu/blog.anthonydu.com) and Cloudflare Pages is used to build and deploy the website everytime I push new commits to GitHub as with any of my other websites. It took quite some time figuring out how to make Next.js work with Cloudflare Pages but I was glad that Cloudflare had documentations on their website that were quite useful. I heard that they only added support not too long ago because Next.js recently added support for Edge Runtime which Cloudflare uses.

This was also the first project that I created from the ground up with Copilot turned on. I was amazed as to how good it is. In fact, it is making suggestions as I write this very sentense and by now even myself can't tell apart what I had wrote and what Copilot had wrote. (I always knew that writing was going to be a useless skill and I've always hated learning it in school. But here I am writing articles like it's nothing. Now I'm glad that I didn't waste too much time on learning how to correctly use semicolons or diving too deep into the usage of similes and metaphors in English/Chinese class since here I am doing just fine.) Sometimes it gets a bit annoying though seeing those words pop up and forgetting what I had in mind.

Anyways, I had a lot of fun creating this website. I look forward to posting more blog posts on this website and I hope you are looking forward to reading them too!