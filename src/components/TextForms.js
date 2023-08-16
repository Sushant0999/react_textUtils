import React, { useState } from 'react'
import Navbar from './Navbar'


export default function TextForms(props) {
    const [text, setText] = useState('Enter Text Here');
    const [searchText, setSearchText] = useState('');
    const [words, setWords] = useState();

    const handleOnChange = (event) => {
        let newText = event.target.value;
        setText(newText);
    };

    const handleOnClick1 = () => {
        let newText = text.toUpperCase();
        setText(newText);
    };

    const handleOnClick2 = () => {
        let newText = text.toLowerCase();
        setText(newText);
    };

    const encryptmsg = () => {
        let result = '';
        let message = text.toLowerCase();
        for (let i = 0; i < message.length; i++) {
            let charCode = message.charCodeAt(i);

            if (charCode >= 65 && charCode <= 90) {
                charCode = (charCode - 65 + 13) % 26 + 65;
            } else if (charCode >= 97 && charCode <= 122) {
                charCode = (charCode - 97 + 13) % 26 + 97;
            }
            result += String.fromCharCode(charCode);
        }
        setText(result);
    }

    const clearText = () => {
        setText('');
        setSearchText('');
    }

    const handleTextSearch = () => {
        let word = searchText.toLowerCase();
        let string = text.toLowerCase();
        let result = string.split(' ');
        result = result.includes(word);
        setWords(result);
    }

    const handleTextSearchOnChange = (event) => {
        let newText = event.target.value;
        setSearchText(newText);
    }

    const handleCopyToClipboard = () => {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        alert('Text Copied');
    };

    return (
        <div className='container'>
            <div className="form-floating">
                <div>
                    <h2 className="d-flex justify-content-start">{props.title}</h2>
                    <div className="d-flex justify-content-end">
                        <button className="btn btn-primary my-2" onClick={clearText}>Clear Text</button>
                    </div>
                </div>
                <textarea style={{ height: '150px', backgroundColor: props.mode === 'dark' ? '#3F3F3F' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} className="form-control" id="myBox" value={text} onChange={handleOnChange} rows={8}></textarea>
                <button className="btn btn-primary my-4 me-2" onClick={handleOnClick1}>Convert to Uppercase</button>
                <button className="btn btn-primary my-4 me-2" onClick={handleOnClick2}>Convert to Lowercase</button>
                <button className="btn btn-primary my-4 me-2" onClick={encryptmsg}>Encrypt / Decrypt Text</button>
                <button className="btn btn-primary my-4 me-2" onClick={handleCopyToClipboard}>Copy to Clipboard</button>
            </div>
            <div className='container my-3'>
                <h3>Text Summary</h3>
                <p>Number of words : {text.split(" ").length}</p>
                <p>Words Length : {text.length}</p>
                <p>Encrypt Text : {text}</p>
            </div>
            <div className='container' style={{ justifyContent: 'center', justifyItems: 'flex-start', display: 'inline-block' }}>
                <h3 >Search Text</h3>
                <textarea name="textSearch" id="textSearch" rows="4" style={{ height: '30px' }} value={searchText} onChange={handleTextSearchOnChange}></textarea>
                <br />
                <p>Search Result: {words !== undefined ? (words ? 'Word found' : 'Word not found') : ''}</p>
                <button className="btn btn-primary my-1" onClick={handleTextSearch}>Search Text</button>
            </div>
        </div>
    )
}
