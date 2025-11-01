import ListGroup from "./components/ListGroup";

function App() {
  let items: string[] = ["Titu", "Brasov", "Bucuresti"]

  return <div>
    <ListGroup items={items} heading="Cities"/>
  </div>
}

export default App;