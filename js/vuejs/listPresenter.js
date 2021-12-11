function ListPresenter(props) {
    return (
        <div>
            <ListCollectionView
                username={x=> props.model.username}
                lists = {props.model.usersList}
                
                />
        </div>
    )

}