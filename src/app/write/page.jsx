"use client";

import React, { useState, useRef, useMemo } from 'react';
//import JoditEditor from 'jodit-react';
import dynamic from 'next/dynamic';

export default function Write() {
	const editor = useRef(null);
	const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [guardado, setGuardado] = useState(false);

  const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });
	const config = useMemo(
		() => ({
			readonly: false, // all options from https://xdsoft.net/jodit/docs/,
			placeholder: 'Escribe aquí tu articulo...',
            spellcheck: true,
            language: "es",
            showCharsCounter: false,
            showWordsCounter: false,
            showXPathInStatusbar: false,
            buttons: "bold,italic,underline,strikethrough,eraser,ul,ol,font,fontsize,paragraph,lineHeight,spellcheck,cut,copy,paste,selectall,copyformat,hr,link"
		}),
	);

  const handleClick = () => {
    
    console.log("Title :",title);
    console.log("Content :",content);
  };

  const handlePress =() => {
    
    console.log("Press Title :",title);
    console.log("Press Content :",content);
    
  };

	return (
        <div className='w-7/12 p-20 justify-center items-center bg-black'>
          
         
            <input type='text' placeholder='Título' name='title' onChange={(e) => setTitle(e.target.value)}/>
            <JoditEditor
              ref={editor}
              value={content}
              config={config}
              tabIndex={1} // tabIndex of textarea
              onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
              width={500}
              maxWidth={750}			
            />
            
                <button onClick={handleClick} className='text-white bg-neutral-500'>Guardar</button>
           
              <button onClick={handlePress} className='text-white bg-neutral-500'>Publicar</button>

           

          
                
                <p className='text-white bg-neutral-500'>{title}</p>
                <p className='text-white bg-neutral-500'>{content}</p>
          

        </div>
	);
};

/* 
const editor = Jodit.make("#editor", {
  "spellcheck": true,
  "language": "es",
  "showCharsCounter": false,
  "showWordsCounter": false,
  "showXPathInStatusbar": false,
  "buttons": "bold,italic,underline,strikethrough,eraser,ul,ol,font,fontsize,paragraph,lineHeight,spellcheck,cut,copy,paste,selectall,copyformat,hr,link"
});
*/