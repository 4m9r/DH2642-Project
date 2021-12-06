function UserListView(props) {
    return (
        <div>
            <div>
                <p style="margin-bottom: 15px;color: white;"><b>Find out what others have been watching!</b></p>
                {/* {props.users.map(x =>
                    <span key={x.id} style="display: block;">
                        
                            <img class="profile-pic" src={x.profilepic} />
                            <p style="display: inline";>{x.name}</p>
                        
                    </span>

                )} */}


                {/* hard code testing only. Visual purposes. need to fix firebase stuff and chuck all the styling into the style.css file*/}
                <span style="display: block; margin-bottom: 10px">
                    <img class= "profile-pic" src={"https://i.pinimg.com/736x/c3/38/b3/c338b35ff34c623e8e7c3777a70c4e3f.jpg"}  />
                    <p class="userlist-name">Amir</p>
                </span>
                <span style="display: block; margin-bottom: 10px" onClick={e=> window.location.hash = "#user"}>
                    <img class= "profile-pic" src={"https://styles.redditmedia.com/t5_4musx8/styles/communityIcon_f9e96rz85d671.png" }  />
                    <p class="userlist-name" style="cursor: pointer;">Danika</p>
                </span>
                <span style="display: block; margin-bottom: 10px">
                    <img class= "profile-pic" src={"https://media.istockphoto.com/photos/angry-senior-woman-protecting-her-cat-with-a-gun-picture-id1191072534?k=20&m=1191072534&s=612x612&w=0&h=ikLctnv_2qMpIfHmBs-dQ2oqSksrFTg_UstAyo8I1FU=" }  />
                    <p class="userlist-name">Hasti</p>
                </span>
                <span style="display: block; margin-bottom: 10px">
                    <img class= "profile-pic" src={"https://preview.redd.it/a604rad7j4651.png?auto=webp&s=63112b65e516d3e19dcbd05489d09967a2d73dce" } />
                    <p class="userlist-name">Vlad</p>
                </span>

            </div>
        </div>
    )
}