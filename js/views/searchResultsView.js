function SearchResultsView(props) {

    if (props.searchResults?.items) {
        return (<div class="results">
            {props.searchResults.items?.slice(0, 16).map(
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