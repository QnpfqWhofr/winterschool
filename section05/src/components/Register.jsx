//간단한 회원가입 폼
//1.이름
//2.생년월일
//3.국적
//4.자기소개

import { useState } from "react";

const Resigter = () => {
    const [input,setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio: "",
    });

    const onChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div>
            <div>
                <input name="name" value={input.name}onChange={onChange} placeholder={"이름"}/>
            </div>
            <div>
                <input name="birth" type="date" value={input.birth} onChange={onChange}/>
            </div>
            <div>
                <select name="country" onChange={onChange} value={input.country}>
                    <option></option>
                    <option value="kr">대한민국</option>
                    <option value="us">미국</option>
                    <option value="cn">중국</option>
                    <option value="jp">일본</option>
                </select>
            </div>
            <div>
                <textarea name="bio" value={input.bio} onChange={onChange} placeholder="자기소개" />
                {input.bio}
            </div>
        </div>
    );
}

export default Resigter;