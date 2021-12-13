function SearchResultsView(props) {
    return (<div class="results">
        {props.searchResults?.map(
            function (item) {
                return (
                    <span class="searchResult" onClick={
                        e => { props.movieChosen(item.id); window.location.hash = "#details"; }
                    } >
                        <img class="searchImage" src={item.image} />
                        <div>
                            {item.title}
                        </div>
                    </span>
                );
            }
        )
        }

    </div>
    );
}