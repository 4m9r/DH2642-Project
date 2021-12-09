function SearchView(props) {
    return (
        <div class="searchBar">
            <input class="searchBox" placeholder="search" type="search" onInput={e =>
                props.onText(e.target.value)
            }>
            </input>

            <button onClick={() =>
                props.onSearch()
            }>
                Search!
            </button>
        </div>
    );
}
