function ListCollectionView() {
    // return (
    //     <div>
    //         /* for each list that the user has, create a span for a list showing what contents each list has. */
    //         <h1>{props.users.user}'s Lists</h1>
    //         {props.users.user.lists.map(x =>
    //             <div key={x.id}>
    //                 <div class="box">
    //                     // display: inline-block
    //                     <span>
    //                         // img and title of list in the same line?
    //                         <img src={x.image} height={100} width={100} />
    //                         <h4>{x.listname}</h4>
    //                         // should map 3 movies max from the list then "..." (suggestion)
    //                         {x.list.moviename1}
    //                         {x.list.moviename2}
    //                         {x.list.moviename3}
    //                         {"..."}                            
    //                     </span>
    //                 </div>
    //             </div>
    //         )}
    //     </div>

    // )



    // HARD CODE TESTING //
    return (
        <div>

            <div>

               <span> <img src={"https://styles.redditmedia.com/t5_4musx8/styles/communityIcon_f9e96rz85d671.png"} height={100} width={100} /> </span>
                
                    <span style="vertical-align: top; display:inline-block">
                        <h2>Danika's List</h2>
                        <h6 style="vertical-align: top;"> small text </h6>
                    </span>
                


            </div>

            <br />

            <div>
                <div class="listbox">
                    <img src={"https://cdn-icons-png.flaticon.com/512/214/214309.png"} height={40} width={40} />
                    <h4>Favourites</h4>
                    <p> Movie 1 </p>
                    <p> Movie 2 </p>
                    <p> Movie 3 </p>
                    <p> ... </p>
                </div>

                <div class="listbox">
                    <img src={"https://cdn-icons-png.flaticon.com/512/3418/3418886.png"} height={40} width={40} />
                    <h4>Watchlist</h4>
                    <p> Movie 1 </p>
                    <p> Movie 2 </p>
                    <p> Movie 3 </p>
                    <p> ... </p>
                </div>

                <div class="listbox">
                    <div style="display: flex; justify-content: center; "><img src={"https://cdn.pixabay.com/photo/2017/03/31/21/58/rain-2192523_960_720.png"} height={40} width={40} /></div>
                    <h4>For a Rainy Day</h4>
                    <p> Movie 1 </p>
                    <p> Movie 2 </p>
                    <p> Movie 3 </p>
                    <p> ... </p>
                </div>
            </div>
        </div>

    )

}