function ListCollectionView(props) {


    let myTarget = (JSON.stringify(props.lists))

    console.log(myTarget)

return (


    <div>
        <span> <img src={props.profilePic} height={100} width={100} /> </span>

        <span style="vertical-align: top; display:inline-block">
            <h3>{props.username}'s Lists</h3>
            <p style="vertical-align: top;">this is the description</p>
        </span>

        {


            // <div>


            //     {target_copy.map(x=> 
            //     <div class="listbox">
            //         <span>
            //             <p style="margin-bottom: 10px;"><b>{x.listname}</b></p>
            //             {/* {x.map(movie => 
            //                 <p> {movie} </p>
            //                 )} */}

            //         </span>
            //     </div>
            //     )}


            // </div>
        }
    </div>

)



        }