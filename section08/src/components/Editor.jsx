import './Editor.css';
import { useState,useRef } from 'react';

const Editer = ({onCreate}) => {
    const [content, setContent] = useState("");
    const [endate, setEndate] = useState("");
    const contentRef = useRef();

    const onChangeContent = (e) => {
        setContent(e.target.value);
    };

    const onChangeEndate = (e) => {
        setEndate(e.target.value);
    }

    const onKeydown = (e) => {
        if (e.keyCode === 13) {
            onSubmit();
        }
    }

    const onSubmit = () => {
        if (content === "") {
            content.current.focus();
            return;
        }
        onCreate(content,endate);
        setContent("");
        setEndate("");
    };

    return <div className="Editor">
        <input ref={contentRef} value={content} onKeyDown={onKeydown} onChange={onChangeContent} placeholder="새로운 Todo..."/>
        <input type="date" value={endate} onKeyDown={onKeydown} onChange={onChangeEndate}/>
        <button onClick={onSubmit}>추가</button>
    </div>;
}

export default Editer;