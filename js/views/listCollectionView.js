function ListCollectionView(props) {
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



    {/* hard code testing only. Visual purposes. need to fix firebase stuff and chuck all the styling into the style.css file*/}
    return (
        <div>

            <div>

               <span> <img src={"https://styles.redditmedia.com/t5_4musx8/styles/communityIcon_f9e96rz85d671.png"} height={100} width={100} /> </span>
                
                    <span style="vertical-align: top; display:inline-block">
                        <h3>Danika's List</h3>
                        <p style="vertical-align: top;"> some text, description of lists maybe</p>
                    </span>
                


            </div>

            <br />

            <div>
                <div class="listbox">
                <div style="display: flex; justify-content: center; "><img src={"https://cdn-icons-png.flaticon.com/512/214/214309.png"} height={40} width={40} style="text-align: center;"/></div>
                    <p style="margin-bottom: 10px;"><b>Favourites</b></p>
                    <p> Movie 1 </p>
                    <p> Movie 2 </p>
                    <p> Movie 3 </p>
                    <p> ... </p>
                </div>

                <div class="listbox">
                <div style="display: flex; justify-content: center; "><img src={"https://cdn-icons-png.flaticon.com/512/3418/3418886.png"} height={40} width={40} style="text-align: center;"/></div>
                    <p style="margin-bottom: 10px;"><b>Watchlist</b></p>
                    <p> Movie 1 </p>
                    <p> Movie 2 </p>
                    <p> Movie 3 </p>
                    <p> ... </p>
                </div>

                <div class="listbox">
                    <div style="display: flex; justify-content: center; "><img src={"https://cdn.pixabay.com/photo/2017/03/31/21/58/rain-2192523_960_720.png"} height={40} width={40} /></div>
                    <p style="margin-bottom: 10px;"><b>For a Rainy Day</b></p>
                    <p> Movie 1 </p>
                    <p> Movie 2 </p>
                    <p> Movie 3 </p>
                    <p> ... </p>
                </div>
            </div>
        </div>

    )

}