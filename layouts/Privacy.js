import React from 'react'
import { markdownify } from "@lib/utils/textConverter";
import axios from 'axios';
import { useState, useEffect } from 'react';
import parse, { htmlToDOM } from "html-react-parser";



const Privacy = ({data}) => {
    const [privacy, setPrivacy] = useState([])
    const { frontmatter } = data;
    const { title, info } = frontmatter;

    useEffect(()=>{
axios.get("https://strapi-155887-0.cloudclusters.net/api/privacies").then((res)=>{
    setPrivacy(res.data.data)
    console.log(res)
}).catch((eror)=>{
    console.log(eror)
})
    }, [])


    var showdown  = require('showdown'),
    converter = new showdown.Converter(),
    text      = privacy[0]?.attributes?.PrivacyPolicy,
    html      = converter.makeHtml(text);

    
  return (
    <section className="section bg-primary ">
    <div className="container pt-12 ">
      {markdownify(title, "h1", "text-center font-normal text-white")}
     <h4 className='mt-10'>
      Personal Information: 
      </h4>

  <div class="markdown text-white text-justify">
            {parse(html || "")}
            </div>

    </div>
  </section>
  )
}

export default Privacy