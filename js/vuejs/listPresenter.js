function ListPresenter(props) {
    return (
        <div>
            <ListCollectionView
                selectedUser = {e=> props.model.friendsList.e}
                />
        </div>
    )

}