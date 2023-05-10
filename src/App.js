function App() {
  const bird1 = new Audio(
    "https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3"
  );
  const bird2 = new Audio(
    "https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3"
  );
  const me = require("./assets/images/image.jpg");

  function toggle1() {
    if (bird1.paused) {
      bird1.play();
    } else {
      bird1.pause();
    }
  }

  function toggle2() {
    bird2.paused ? bird2.play() : bird2.pause();
  }
  return (
    <>
      <div>
        <img src={me} width="333px" alt="me logo" />
        <br />
        <button onClick={toggle1}>Bird one</button>
        <button onClick={toggle2}>Bird two</button>
      </div>
    </>
  );
}

export default App;
