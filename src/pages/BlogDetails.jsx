import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FaFacebookF, FaLink, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const BlogDetails = () => {
  const [blog, setBlog] = useState(null);
  const { blogTitle } = useParams();

  // Load local images
  const images = import.meta.glob("../assets/img/blog/*.webp", {
    eager: true,
  });

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch("https://iv-blogs.ivhub.com/blogslist");
        if (!response.ok) throw new Error("Failed to fetch blog list");

        const data = await response.json();

        // Find the blog that matches the slugified title
        const currentBlog = data.articlesData.find(
          (b) => b.title.replace(/\s+/g, "-") === blogTitle
        );

        if (currentBlog) {
          // Map image from local assets
          const imageModule = images[`../assets/img/blog/${currentBlog.img}`];
          const blogWithImage = {
            ...currentBlog,
            img: imageModule?.default || "",
          };
          setBlog(blogWithImage);
        } else {
          setBlog(null);
        }
      } catch (error) {
        console.error("Error loading blog:", error);
        setBlog(null);
      }
    };

    fetchBlog();
  }, [blogTitle]);

  if (!blog) return <div className="blog-loading">Loading...</div>;

  return (
    <div className="blog-details">
      {blog.img && <img className="hero-bg" src={blog.img} alt={blog.title} />}

      <div className="blog-wrapper">
        <div className="container">
          <div className={blog.img ? "blog-wrap" : "blog-wrap-img"}>
            <div className="blog-content">
              <div className="date-wrap">
                <span>{blog.date}</span>
                <div className="share-wrap">
                  <Link to={"/"}><FaFacebookF /></Link>
                  <Link to={"/"}><FaTwitter /></Link>
                  <Link to={"/"}><FaLinkedinIn /></Link>
                  <Link to={"/"}><FaLink /></Link>
                </div>
              </div>

              <h1>{blog.title}</h1>
              <div dangerouslySetInnerHTML={{ __html: blog.desc }}></div>


              {blog.content?.map((x, index) => (
                <div className="content" key={index}>
                  <h2>{x.title}</h2>
                  <p>{x.content}</p>

                  {x.decimalPoints && (
                    <ul className="number-list">
                      {x.decimalPoints.map((y, yIndex) => (
                        <div className="list" key={yIndex}>
                          <li>{y.title}</li>
                          <span className="sub-list-desc">{y.description}</span>
                        </div>
                      ))}
                    </ul>
                  )}

                  {x.bulletPoints && (
                    <ul className="bullet-list">
                      {x.bulletPoints.map((y, yIndex) => (
                        <div className="list" key={yIndex}>
                          <li>{y.title}</li>
                          <span className="sub-list-desc">{y.description}</span>
                        </div>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
