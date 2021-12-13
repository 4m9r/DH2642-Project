const SearchPresenter = {
    data() { return { promise: null, data: null, error: null, searchQuery: "", }; },
    props: ["model"],
    created() { this.promise = MovieSource.searchMovie("Léon: The Professional"); },  // lifecycle 1, execute at creation 
    watch: {
        'promise': {
            immediate: true,
            handler() {
                this.data = this.error = null;
                if (this.promise) {
                    const p = this.promise;
                    this.promise.then(dt => {
                        if (this.promise === p)
                            this.data = dt;
                        if (this.data == null)
                            this.error = "no Movie was found"
                    })
                        .catch(er => { if (this.promise === p) this.error = er; });
                }

            }
        }
    },

    render() {
        return <div>
            <SearchView
                onText={txt => this.searchQuery = txt}
                onSearch={() => this.promise = MovieSource.searchMovie(this.searchQuery)}

            />

            {promiseNoData(this.promise, this.data, this.error) ||
                < SearchResultsView searchResults={this.data}
                    movieChosen={id => this.model.setCurrentMovie(id)}
                />}
        </div>
    }


}
