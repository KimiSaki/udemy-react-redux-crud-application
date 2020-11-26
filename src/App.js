
function App() {
  return (
    <div>
      <Cat />
      <label htmlFor="bar">bar</label>
      <input type="text" onChange={() => {console.log("I'm React!")}} />
    </div>
  );
}

function Cat() {
  return <div>Maiow!</div>
}

export default App;
