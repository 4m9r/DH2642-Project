function UserListView(props) {
    return (
        <div>
            <div>
                <p><b>Find out what others have been watching!</b></p>
                {/* {props.users.map(x =>
                    <span key={x.id} style="display: block;">
                        
                            <img class="profile-pic" src={x.profilepic} />
                            <p style="display: inline";>{x.name}</p>
                        
                    </span>

                )} */}


                {/* Hard code only for visual purposes. Fix firebase user stuff later */}
                <span style="display: block; margin-bottom: 10px">
                    <img class= "profile-pic" src={"https://i.pinimg.com/736x/c3/38/b3/c338b35ff34c623e8e7c3777a70c4e3f.jpg"}  />
                    <p style="display: inline;">Amir</p>
                </span>
                <span style="display: block; margin-bottom: 10px">
                    <img class= "profile-pic" src={"https://preview.redd.it/6nxw5hctq1631.jpg?auto=webp&s=dedc2ca5ed9db2a9903b94eea8f3d698055b65bf" }  />
                    <p style="display: inline;">Danika</p>
                </span>
                <span style="display: block; margin-bottom: 10px">
                    <img class= "profile-pic" src={"https://media.istockphoto.com/photos/angry-senior-woman-protecting-her-cat-with-a-gun-picture-id1191072534?k=20&m=1191072534&s=612x612&w=0&h=ikLctnv_2qMpIfHmBs-dQ2oqSksrFTg_UstAyo8I1FU=" }  />
                    <p style="display: inline;">Hasti</p>
                </span>
                <span style="display: block; margin-bottom: 10px">
                    <img class= "profile-pic" src={"https://preview.redd.it/a604rad7j4651.png?auto=webp&s=63112b65e516d3e19dcbd05489d09967a2d73dce" } />
                    <p style="display: inline;">Vlad</p>
                </span>

            </div>
        </div>
    )
}