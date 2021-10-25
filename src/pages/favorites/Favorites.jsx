import { useSelector } from "react-redux";
import { selectFavoritesItems } from "../../redux/selectors/favorites.selectors";
import UserCard from "../../components/userCard/UserCard";

const Favorites = () => {
    const favoriteItems = useSelector(selectFavoritesItems);

    return (
        <div>
            <h1>Favorites Page</h1>
            {favoriteItems.length ? (
                favoriteItems.map((item, index) => (
                    <UserCard user={item} key={index} />
                ))
            ) : (
                <h2>Your Favorite item list is Empty</h2>
            )}
        </div>
    );
};

export default Favorites;
