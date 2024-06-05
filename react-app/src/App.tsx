//para usarmos um componente, podemos fazer o import:
import Message from "./Message";

function App() {
  //para utilizarmos um componente, utilizamos como se fosse uma tag HTML, tanto assim '<Message />' ou assim '<Message></Message>'
  return (
    <div>
      <Message />
    </div>
  );
}

export default App;
