import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  const location = useLocation();
  const isHomePage = location.pathname === '/'

  useEffect(() => {
    // Fetch blog metadata from index.json
    fetch('./blogs/index.json')
      .then(response => response.json())
      .then(data => setBlogs(data))
      .catch(error => console.error('Error fetching blogs:', error));
  }, []);

  return (
    <div className={`p-4 ${!isHomePage? 'px-36' : ''}`}>
      <h1 className="text-3xl font-bold mb-4">Blogs</h1>
      <div className={`grid grid-cols-1 md:grid-cols-2 ${!isHomePage? 'lg:grid-cols-3' : 'lg:grid-cols-2'} gap-8`}>
        {blogs.map((blog) => (
          <Link
            to={`/blogs/${blog.id}`}
            key={blog.id}
            className="bg-gray-800 px-4 pt-4 pb-2 rounded-xl shadow-md"
          >
            <h2 className="text-xl font-semibold text-gray-200 mb-">{blog.title}</h2>
            <p className="text-gray-500 text- mb-1"><strong>Author:</strong> {blog.author}</p>
            <p className="text-gray-200 mb-1 mt-4">{blog.line_description}</p>
            
            {/* <p className="text-gray-500 text-sm"><strong>Date:</strong> {blog.date}</p> */}
            {/* <p className="text-gray-500 text-sm"><strong>Last Edited:</strong> {blog.last_edited}</p> */}

            <div className="flex flex-wrap gap-2 mt-4 mb-2">
              {blog.tags.map((tag, index) => (
                <span key={index} className="bg-blue-100 text-blue-700 font-bold px-3 py-1 rounded-full text-base">
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
