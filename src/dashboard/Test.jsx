
import JoditEditor from 'jodit-react';
import React, { useState, useRef } from 'react';

const Test = () => {
    const editor = useRef(null);
	const [content, setContent] = useState('');
  return (
    <div>
      <h1>hi</h1>
      <JoditEditor 
      ref={editor}
      value={content}
      onChange={newContent => setContent(newContent)}
      />
    </div>
  )
}

export default Test
