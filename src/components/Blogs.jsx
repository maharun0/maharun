const Blogs = () => {
  const blogs = [
    { id: 1, title: 'Learning React', description: 'A guide to getting started with React.' },
    { id: 2, title: 'CSS Tricks', description: 'Tips and tricks to style efficiently with CSS.' },
    { id: 3, title: 'State Management in React', description: 'Understanding state management libraries.' },
  ];

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{blog.title}</h2>
            <p className="text-gray-600">{blog.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
