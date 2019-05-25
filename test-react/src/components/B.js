import React from 'react'

let B = (props) =>{
    console.log(props.match.params.num);
    return(
        <div>
            <div>BBBB</div>
            <button onClick={() => {
                props.history.goBack();
            }}>返回上一页</button>
        </div>
    )
}
export default B;
