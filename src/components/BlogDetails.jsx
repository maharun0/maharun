import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('./blogs/index.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to load index');
        }
        return response.json();
      })
      .then(indexData => {
        const blogEntry = indexData.find(entry => entry.id === id);
        if (!blogEntry) {
          throw new Error('Blog entry not found in index');
        }

        setBlog(blogEntry);
        return fetch(`./blogs/${blogEntry.filename}`);
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to load blog content');
        }
        return response.text();
      })
      .then(text => setContent(text))
      .catch(error => {
        console.error('Error loading blog:', error);
        setError(error.message);
      });
  }, [id]);

  if (error) {
    return <p className="p-4 text-red-500">{error}</p>;
  }

  if (!blog || !content) return <p className="p-4">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white/70 shadow-lg rounded-lg backdrop-filter backdrop-blur-lg">
      <button onClick={() => navigate(-1)} className="text-blue-500 hover:underline text-lg mb-4">
        ← Back to Blogs
      </button>
      <h1 className="text-4xl font-bold text-gray-800 mb-6">{blog.title}</h1>

      <div className="text-gray-600 text-sm mb-4">
        <p><strong>Author:</strong> {blog.author}</p>
        <p><strong>Published on:</strong> {blog.date}</p>
        <p><strong>Last Edited:</strong> {blog.last_edited}</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {blog.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default BlogDetails;
