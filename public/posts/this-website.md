---
title: The Technology Behind This Website
author: Anthony Du
description: "The technology behind blog.anthonydu.com explained."
pinned: true
---

# The Technology Behind This Website

This website was bootstrapped with create-next-app with the TypeScript template. There are a lot of changes that came with version 13 of Next.js, so it took me a while to figure every new thing out since there aren't enough resources online yet.

Gray-matter and react-markdown was used to parse and render markdown files stored at public/posts. 

Markdown files are used because it is widely used and very easy to edit. I have no idea if this is a common practice for blog websites, but I'm pretty proud of this implementation and that I actually got it to work within a day. 

Each markdown file has a header that contains metadata about the post. The header is separated from the rest of the markdown file by a line of three dashes.

This website's source files are uploaded to [GitHub](https://github.com/anthonydu/blog.anthonydu.com) and Cloudflare Pages is used to build and deploy the website everytime I push new commits to GitHub as with any of my other websites.  

This was also the first project that I created from the ground up with Copilot turned on. I was amazed as to how smart it is. In fact, it is making suggestions as I write this very sentense. 

Anyways, I had a lot of fun creating this website. I look forward to posting more blog posts on this website and I hope you are looking forward to reading them too!