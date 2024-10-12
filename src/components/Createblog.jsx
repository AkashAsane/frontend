import React from 'react';
import BlogEditor from './Editor';
import axios from 'axios';

const CreateBlog = () => {
  const handleBlogSave = async (editorData) => {
    try {
      const response = await axios.post('https://your-backend-api.com/blogs', {
        content: editorData,
      });
      if (response.status === 201) {
        alert('Blog created successfully');
      }
    } catch (error) {
      console.error('Error saving blog', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Create a New Blog</h1>
      <BlogEditor onSave={handleBlogSave} />
    </div>
  );
};

export default CreateBlog;
