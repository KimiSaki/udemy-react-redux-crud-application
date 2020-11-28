
function App() {
  const profiles = [
    {name: "Alice", age:10},
    {name: "Bob", age:15},
    {name: "Carol"},
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index}/>
        })
      }
    </div>
  );
}

function User(props) {
  return <div>Hi, I am {props.name}, and {props.age} years old.</div>
}

User.defaultProps = {
  age: 0
}

export default App;
