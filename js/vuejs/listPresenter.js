function ListPresenter(props) {
    return (
        <div>
            <ListCollectionView
                username = {props.model.username}
                profilePic = {props.model.profilePic}
                listCollection = {props.model.usersList}
                />
        </div>
    )

}