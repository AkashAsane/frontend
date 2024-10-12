import React, { useRef, useEffect, useState } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import ImageTool from '@editorjs/image';

const BlogEditor = ({ onSave }) => {
  const [editorLoaded, setEditorLoaded] = useState(false); // To ensure editor is loaded only when the DOM element exists
  const editorInstance = useRef(null);

  useEffect(() => {
    if (editorLoaded) {
      editorInstance.current = new EditorJS({
        holder: 'editorjs',
        tools: {
          header: {
            class: Header,
            inlineToolbar: ['link'],
            config: {
              levels: [2, 3, 4],
              defaultLevel: 2,
            },
          },
          image: {
            class: ImageTool,
            config: {
              endpoints: {
                byFile: 'https://your-backend-api.com/uploadFile', // Backend endpoint for file upload
                byUrl: 'https://your-backend-api.com/fetchUrl', // Backend endpoint for URL-based image upload
              },
            },
          },
        },
        autofocus: true,
        placeholder: 'Write your blog content here...',
      });

      return () => {
        editorInstance.current?.destroy(); // Clean up editor instance
      };
    }
  }, [editorLoaded]); // Only initialize the editor when the DOM element is ready

  useEffect(() => {
    setEditorLoaded(true); // Set editor loaded once the component is mounted
  }, []);

  const handleSave = async () => {
    if (editorInstance.current) {
      const savedData = await editorInstance.current.save();
      onSave(savedData);
    }
  };

  return (
    <div>
      <div id="editorjs" className="bg-white p-4 rounded-lg shadow-md"></div>
      <button
        onClick={handleSave}
        className="px-6 py-2 text-white bg-blue-500 rounded-lg mt-4"
      >
        Save Blog
      </button>
    </div>
  );
};

export default BlogEditor;
