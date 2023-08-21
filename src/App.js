import Hello from "./component/Hello";
import Welcome from "./component/Welcome";



function App() {
  // 변수 return위에 변수
  const name = "싹난감자";
  let age = 28 ;
  let gender = true ;
  // 객체
  const naver = {
    name : "네이버",
    url : "https://www.naver.com",
    target : "_blank"
  }
  return (
    <div className="App">
      {/*  컴포넌트  */}
     <Welcome></Welcome>
     <Hello></Hello>
     {/* {변수,숫자,문자열} 사용가능 */}
     <h1>{'이름 : '}{name}, {"나이 : "}{age}</h1>
     <h1>이름 : {name}, 나이 : {age}</h1>
     {/* 객체 {객체이름.속성} */}
     <h2><a href={naver.url} target={naver.target}>{naver.name}</a></h2>
    </div>
  );
}

export default App;
