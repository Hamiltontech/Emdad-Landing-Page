import { markdownify } from "@lib/utils/textConverter";
import shortcodes from "@shortcodes/all";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import Base from "./Baseof";

import { BsPinterest } from "react-icons/bs";
import { RiWhatsappFill, RiMessengerFill } from "react-icons/ri";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillCopy,
  AiFillMail,
} from "react-icons/ai";

import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  EmailShareButton,
  EmailIcon,
} from "next-share";

const PostSingle = ({ data, postID, slug }) => {
  function copied() {
    setTimeout(function () {
      document.getElementById("mydiv").style.display = "block";
    });
    setTimeout(function () {
      document.getElementById("mydiv").style.display = "none";
    }, 2000);
  }

  const love =
    "https://strapi-155887-0.cloudclusters.net/post/" + slug 

  // let { description, title, image } = frontmatter;
  // description = description ? description : content.slice(0, 120);
  console.log(data);
  let title = data?.attributes?.Title;
  let image =
    "https://strapi-155887-0.cloudclusters.net" +
    data?.attributes?.Image?.data?.attributes?.url;
  return (
    <Base title={title}>
      <section className="section bg-primary text-white  ">
        <div className="container pt-12">
          <div className="row">
            <article className="col-12 mx-auto text-center md:col-8">
              {image && (
                <img
                  src={image}
                  height="500"
                  width="1000"
                  alt={title}
                  layout="responsive"
                  className="rounded-lg"
                />
              )}
              {markdownify(title, "h1", "h2 mb-6 mt-6 text-left ")}

              <div className="content mb-16 text-left text-white">
                {/* <MDXRemote {...data?.attributes?.Abstract} components={shortcodes} /> */}
                <h4 className="text-white"> {data?.attributes?.Abstract}</h4>

                {data?.attributes?.Content.map((item) => (
                  <>
                    {item?.children[0]?.text}
                    <br></br>
                  </>
                ))}
              </div>
            </article>

            <p className="text-center text-sm"> Share Article Via..</p>
            <div className="flex  container justify-center">
      <div className="flex p-1 lg:my-1 mx-1 hover:scale-110">
        <EmailShareButton
          // url=""
          subject="7Hills Article"
          body={love}
        >
          <AiFillMail size={25} />
        </EmailShareButton>
      </div>

      <div className="flex p-1 lg:my-1  mx-1 hover:scale-110">
        <FacebookShareButton
          url={"https://emdad-landing-page.vercel.app/post/" + slug}
          quote={love}
          hashtag={"#Emdad-Digital-Transformation"}
        >
          <AiFillFacebook size={25} />
        </FacebookShareButton>
      </div>

      <div className="flex p-1  lg:my-1 mx-1 hover:scale-110">
        <FacebookMessengerShareButton
          url={"https://emdad-landing-page.vercel.app/post/" + slug}
          appId={""}
        >
          <RiMessengerFill size={25} />
        </FacebookMessengerShareButton>
      </div>

      <div className="flex p-1 lg:my-1 mx-1 hover:scale-110">
        <PinterestShareButton
          url={"https://emdad-landing-page.vercel.app/post/" + slug}
          media={love}
        >
          <BsPinterest size={25} />
        </PinterestShareButton>
      </div>

      <div className="flex p-1 lg:my-1 mx-1 hover:scale-110">
        <TwitterShareButton
          url={"https://emdad-landing-page.vercel.app/post/" + slug}
          title={love}
        >
          <AiOutlineTwitter size={25} />
        </TwitterShareButton>
      </div>

      <div className="flex p-1 lg:my-1 mx-1 hover:scale-110">
        <WhatsappShareButton
          url={"https://emdad-landing-page.vercel.app/post/" + slug}
          title={love}
          separator=":: "
        >
          <RiWhatsappFill size={25} />
        </WhatsappShareButton>
      </div>
      
      <div className="flex p-1 lg:my-1 mx-1 hover:scale-110">
        <button
          onClick={()=>{
            copied()
            navigator.clipboard.writeText(window.location.href);
            
          }}
        >
          <AiFillCopy size={25} />
        </button>
        <div id="mydiv" style={{"display": "none"}} className="text-secondary  p-1 text-sm">Link copied!</div>
      </div>
    </div>
          </div>
        </div>
      </section>
    </Base>
  );
};

export default PostSingle;
