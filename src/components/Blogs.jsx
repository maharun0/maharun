import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch blog metadata from index.json
    fetch('./blogs/index.json')
      .then(response => response.json())
      .then(data => setBlogs(data))
      .catch(error => console.error('Error fetching blogs:', error));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {blogs.map((blog) => (
          <Link
            to={`/blogs/${blog.id}`}
            key={blog.id}
            className="bg-gray-900 p-4 rounded-lg shadow-md"
          >
            <h2 className="text-xl font-semibold text-gray-200 mb-2">{blog.title}</h2>
            <p className="text-gray-200 mb-1">{blog.line_description}</p>
            <p className="text-gray-500 text- mb-1"><strong>Author:</strong> {blog.author}</p>
            <p className="text-gray-500 text-sm"><strong>Date:</strong> {blog.date}</p>
            <p className="text-gray-500 text-sm"><strong>Last Edited:</strong> {blog.last_edited}</p>

            <div className="flex flex-wrap gap-2 mt-4 mb-2">
              {blog.tags.map((tag, index) => (
                <span key={index} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
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
