function App() {
 const fetchData = async () => {
  const res = await fetch("http://localhost:4321/api/Venus")
  const data = await res.json()
  console.log(data)
 }
 fetchData()
  return (
    <>
      <div>Hello world</div>
    </>
  );
}

export default App;
