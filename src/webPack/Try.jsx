import React ,{Component} from 'react';
//hooks에서는 memo 로 대체 , shouldcomponent 없고, pureComponent도 없음.
const Try = memo(({tryInfo})=>{
        return(
            <li>
                <div>{tryInfo.try}</div>
                <div>{tryInfo.result}</div>
            </li>
        )
});
export default Try