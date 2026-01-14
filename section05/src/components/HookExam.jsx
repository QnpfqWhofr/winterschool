//3가지 hook 관련 팁
//1.함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
//2.조건부 호출 불가
//3.나만의 훅(커스텀 훅) 만들기 가능

import {useState} from "react";
import useInput from "../hooks/useInput";

const HookExam = () => {
    const [input, onChange] = useInput();
    return (
        <div>
            <input value={input} onChange={onChange} />
        </div>
    );
}

export default HookExam;