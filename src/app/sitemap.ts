import fs from "fs";
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: process.env.BASE_URL + "/",
    },
    ...fs.readdirSync("public/posts").map(post => {
      return {
        url: process.env.BASE_URL + "/" + post.replace(".md", ""),
      };
    })
  ]
}