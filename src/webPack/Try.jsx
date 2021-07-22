import React ,{Component , useState , memo} from 'react';
import { useState } from 'react/cjs/react.development';
//hooks에서는 memo 로 대체 , shouldcomponent 없고, pureComponent도 없음.
const Try = memo(({tryInfo})=>{
        //props는 불변 값이기 때문에 스테이트를 받아와서 스테이트를 변경해줘야한다
        const {result, setResult} = useState(tryInfo.result);
        const onClick = () => {
            //변경 값
            setResult('1');
        }
        return(
            <li>
                <div>{tryInfo.try}</div>
                <div onClick={onClick}>{result}</div>
            </li>
        )
});
export default Try