function SearchView(props) {
    return (
        <div class="searchBar">
            <input placeholder="search" type="search" onInput={e =>
                props.onText(e.target.value)
            }>
            </input>

            <button onClick={(e) =>
                props.onSearch()
            }>
                Search!
            </button>
        </div>
    );
}
