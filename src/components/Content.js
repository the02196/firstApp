import React, { useState } from 'react'

function Content(props) {
    console.log(props);

    let [title, setTitle] = useState(["쌍둥이 아기판다", "쌍둥이 아기판다", "주토피아 동물 아카데미", "귀엽게 찰칵"]);
    let [desc, setDesc] = useState(["스페셜 이벤트", "이름을 지어주세요", "판다는 곰이 맞을까?", "에버랜드 AR필터"])
    
    let Img = [
      "https://via.placeholder.com/320/dfd",
      "https://via.placeholder.com/320/g32",
      "https://via.placeholder.com/320/b36",
      "https://via.placeholder.com/320/h63"
    ]
    let [good, setGood] = useState(0)

    function goodFun(){
      setGood(good + 1);
    }
    function Change(){
      let copy = [...title];
      let copyDesc = [...desc];
      document.querySelectorAll("button").forEach((e, i)=>{
        copy[i] = "change-title";
        copyDesc[i] = "change-desc";
        setTitle(copy);
        setDesc(copyDesc);
      })
    }
    let [modalChk, setModalChk] = useState(false);
    function Modal(){
      setModalChk(!modalChk);
      // (modalChk === false ? setModalChk(true) : setModalChk(false));
    }
    return (
      <>
        <div className="content-item" onClick={Modal}>
          <img src={Img[props.arrayNum]} alt="테스트" />
          <h3>{title[props.arrayNum]}</h3>
          <p>{desc[props.arrayNum]}</p>
          <p onClick={goodFun}>👍{good}</p>
          <button onClick={Change}>수정</button>
        </div>
        {
          (modalChk === true ? <div className='window' onClick={Modal}></div> : null)
          // (modalChk === true && <div className='window'></div>)
        }
      </>
    );
  }

export default Content