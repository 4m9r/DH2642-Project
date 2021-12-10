const SearchPresenter = {
    data() { return { promise: null, data: null, error: null, searchQuery: "", }; },
    props: ["model"],
    // 
    created() { this.promise = MovieSource.searchMovie("Léon: The Professional"); },  // lifecycle 1, execute at creation 
    watch: {
        'promise': {
            immediate: true,
            handler() {
                this.data = this.error = null;
                if (this.promise) {
                    const p = this.promise;
                    this.promise.then(dt => { if (this.promise === p) this.data = dt; console.log(dt) })
                        .catch(er => { if (this.promise === p) this.error = er; });
                    console.log(this.data)
                }

            }
        }
    },

    render() {
        console.log(this.data)
        return <div>
            <SearchView
                onText={txt => this.searchQuery = txt}
                onSearch={() => this.promise = MovieSource.searchMovie(this.searchQuery)}

            />

            {promiseNoData(this.promise, this.data, this.error) || (this.data.length === 0) ?
                <div class="noResult">No Movie Found</div> : false ||
                <SearchResultsView searchResults={this.data}
                    movieChosen={id => this.model.setCurrentMovie(id)}
                />}
        </div>
    }


}
