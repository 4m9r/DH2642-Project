function promiseNoData(promise, data, error) {
    //case 1
    if (promise == null)
        return (
            <span>no data</span>
        )
    else {
        //case 2
        if (data == undefined && error == null)
            return (
                <div class="loadingParent">
                    <img class="loading" src="http://www.csc.kth.se/~cristi/loading.gif" />
                </div>
            )
        //case 3
        else if (data == null)
            return (
                <span class="noResult">{error}</span>
            )
        // case 4
        else
            return false;
    }






}