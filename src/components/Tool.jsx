import List from "@editorjs/list";
import Header from '@editorjs/header';
import ImageTool from '@editorjs/image';
import Quote from '@editorjs/quote';

export const EDITOR_JS_TOOLS = {
    header: Header,
    list:List,
    quote: Quote,
    image: {
        class: ImageTool,
        config: {
          endpoints: {
            byFile: 'http://localhost:8008/uploadFile', 
            byUrl: 'http://localhost:8008/fetchUrl', 
          }
        }
      }
}