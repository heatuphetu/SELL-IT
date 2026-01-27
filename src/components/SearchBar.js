export default function SearchBar() {
  return (
    <section>
      <h2>Search Items</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Search for anything" />
        <button type="submit">Search</button>
      </form>
    </section>
  );
}
