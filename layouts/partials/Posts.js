import config from "@config/config.json";
import { plainify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

const Posts = ({ posts }) => {
  const { blog_folder, summary_length } = config.settings;

  return (
    <div className="section row pb-0 bg-primary">
      <div className="col-12 pb-12 lg:pb-24">
        <div className="row items-center">
          <div className="col-12 md:col-6">
            {"https://strapi-155887-0.cloudclusters.net" + posts[0]?.attributes?.Image?.data?.attributes?.url && (
              <img
                className="h-auto w-full rounded-lg"
                src={"https://strapi-155887-0.cloudclusters.net" + posts[0]?.attributes?.Image?.data?.attributes?.url}
                alt="featured"
                width={540}
                height={227}
                priority={true}
              />
            )}
          </div>
          <div className="col-12 md:col-6">
            <h2 className="h3 mb-2 mt-4">
              <Link
                href={`/${blog_folder}/${posts[0]?.attributes?.Title}`}
                className="block hover:text-primary"
              >
                {posts[0]?.attributes?.Title}
              </Link>
            </h2>
            <p className="text-white">
              {plainify(
                posts[0]?.attributes?.Abstract,
                "div"
              )}
            </p>
            <Link
              className="btn btn-primary mt-4"
              href={`/${blog_folder}/${posts[0]?.attributes?.Title}`}
              rel=""
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
      {posts?.slice(1)?.map((post, i) => (
        <div key={`key-${i}`} className="col-12 mb-8 sm:col-6 lg:col-4">
          {post?.attributes.Image && (
            <img
              className="rounded-lg"
              src={"https://strapi-155887-0.cloudclusters.net" + post?.attributes?.Image?.data?.attributes?.url}
              alt="/post"
              width={i === 0 ? "925" : "445"}
              height={i === 0 ? "475" : "230"}
            />
          )}
          <h2 className="h3 mb-2 mt-4">
            <Link
              href={`/${blog_folder}/${post?.attributes?.Title}`}
              className="block text-white hover:text-secondary ease-in-out duration-200 text-xl font-bold"
            >
              {post?.attributes?.Title}
            </Link>
          </h2>
          <p className="text-white">{post?.attributes?.Abstract}</p>
        
        </div>
      ))}
    </div>
  );
};

export default Posts;
