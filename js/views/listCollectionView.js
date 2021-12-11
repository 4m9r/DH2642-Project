function ListCollectionView(props) {

    console.log("DEBUG: page is of name " + props.username)

    return (
        <div>
             <span> <img src={props.profilePic} height={100} width={100} /> </span>

             <span style="vertical-align: top; display:inline-block">
                    <h3>{props.username}'s Lists</h3>
                    <p style="vertical-align: top;">this the user's page (vlad not vlad2)</p>
                </span>
            
            {
                <div>

                    {/* {props.selectedUsersList.map(x =>
                        <div class="listbox">
                            <span>
                                <p style="margin-bottom: 10px;"><b>x.listname</b></p>
                                <p> Movie 1 </p>
                                <p> Movie 2 </p>
                                <p> Movie 3 </p>
                                <p> ... </p>
                            </span>
                        </div>

                    )} */}

                </div>
            }
        </div>

    )



    {/* hard code testing only. Visual purposes. need to fix firebase stuff and chuck all the styling into the style.css file*/ }
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
                    <div style="display: flex; justify-content: center; "><img src={"https://cdn-icons-png.flaticon.com/512/214/214309.png"} height={40} width={40} style="text-align: center;" /></div>
                    <p style="margin-bottom: 10px;"><b>Favourites</b></p>
                    <p> Movie 1 </p>
                    <p> Movie 2 </p>
                    <p> Movie 3 </p>
                    <p> ... </p>
                </div>

                <div class="listbox">
                    <div style="display: flex; justify-content: center; "><img src={"https://cdn-icons-png.flaticon.com/512/3418/3418886.png"} height={40} width={40} style="text-align: center;" /></div>
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