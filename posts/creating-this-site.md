---
title: 'Creating this site - Part 1'
date: '2021-11-26'
---

This is my first foray in to using [Next.JS](https://nextjs.org/) so I will be documenting the process as I add more features to the site

## Phase 1 - The MVP
The Next.JS team have some good [documentation](https://nextjs.org/learn/basics/create-nextjs-app) for beginners. Specifically, how to set up a new static hosted web app which is perfect for me at this stage

I decided to host the [project](https://github.com/R467/R467.github.io) on Github as an excuse to use both Github Actions and Github Pages

### Github Pages and Github Actions
To create your github.io create a repo with the specific name format. I won't go in to detail there is plenty of documentation out there 
![Github repo name is R467/R467.github.io](/images/creating-this-site/GithubPagesRepoName.png)

Be sure to select "gh-pages" as that will be the default branch for the exported content
![Selected branch is gh-pages and root folder](/images/creating-this-site/GithubPagesPublishFolder.png)

Rather that reinvent the wheel I have borrowed the template for my action from [JamesIves](https://github.com/JamesIves/github-pages-deploy-action)

You can see the action [here](https://github.com/R467/R467.github.io/blob/bbd7e5905069375eeb8a0d34e0882454309ab4b2/.github/workflows/main.yml)

### Images and static rendering
Next.JS has a handy component for [image rendering](https://nextjs.org/docs/api-reference/next/image)

By default it support dynamically resizing images to reduce their size. The problem for me it that it doesn't support exported (i.e static) content. 
The short-term workaround for this is to use a vanilla ```<img>``` tag instead

There are options to resize images through packages such as https://github.com/cyrilwanner/next-optimized-images 

I've briefly tried to make this work without success. Looking ahead, this site probably won't stay as static site so for now I'm not going to go down that rabbit hole


### Rendering images from markdown
I'm using remark for rendering for markdown so with [this](https://github.com/remarkjs/remark-images) package I can extend that to include images in the output


### Summary
At this point in time I have:
 - A Github repo
 - Github action used to export and deploy the site to Github pages
 - Pages being published from markdown
 - Static content