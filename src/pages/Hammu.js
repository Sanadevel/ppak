import { useEffect, useState } from "react";
import praise from "../img/갈채하라.png";
import ppak from "../img/빡.png";
import jjak1 from "../img/짝1.png";
import jjak2 from "../img/짝2.png";
import Lara from "../img/라라콘.webp";
import "../style/Hammu.css";

export default function Hammu() {
  const [count, setCount] = useState(0);
  const [pic, setPic] = useState(praise);
  const [hitCount, setHitCount] = useState(0);

  const hit = () => {
    if (hitCount == 0) {
      setPic(jjak1);
    } else if (hitCount == 1) {
      setPic(jjak2);
    } else if (hitCount == 2) {
      setPic(ppak);
      setHitCount(0);
    } else {
      setHitCount(0);
    }
  };

  useEffect(() => {
    const local = localStorage.getItem("key");
    setCount(local ? parseInt(local) : 0);
  }, []);

  const onClick = () => {
    setCount(count + 1);
    setHitCount(hitCount + 1);
    localStorage.setItem("key", count + 1);
    hit();
  };

  const reset = () => {
    setCount(0);
    localStorage.setItem("key", 0);
    setPic(praise);
  };

  const onLara = () => {
    setCount(count + 1);
    setHitCount(hitCount + 1);
    localStorage.setItem("key", count + 1);
    setPic(Lara);
  };

  return (
    <>
      <div className="Hammu">
        <h1>줘패는 사이트</h1>
        <div>왠진 모르겠는데 가끔가다 새로고침하면 카운트 1씩 줄더라</div>
        <div>
          <img
            src={pic}
            onClick={count < 1100 && count > 1000 ? onLara : onClick}
          />
          <div className="hitCount">
            {count < 1100 && count > 1000 ? "애호 해준 횟수" : "줘 팬 횟수"} :{" "}
            {count}
          </div>
        </div>
        <button onClick={reset}>초기화하기</button>
        <div className="call">비난 및 욕설은 디코 : greenflameboys</div>
      </div>
    </>
  );
}
