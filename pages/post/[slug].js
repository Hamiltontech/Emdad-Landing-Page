import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import PostSingle from "@layouts/PostSingle";

const Post = () => {
    const [data, setData] = useState({});
    const router = useRouter();
    const { slug } = router.query;
    const [postID, setPostID] = useState("");

     // from strapi
  useEffect(() => {
    axios
      .get("https://strapi-155887-0.cloudclusters.net/api/blogs?populate=*")
      .then((res) => {
        console.log(res)
        const array = res.data.data;
        
        const found = array?.find((post) => post?.attributes?.Slug === slug);
        setPostID(found?.id || "");
        setData(found);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [router.query.slug, router.isReady]);

  return (
    <div title='post' layout="post">
    <PostSingle data={data} postID={postID} slug={slug}/>

    </div>
  )
}

export default Post