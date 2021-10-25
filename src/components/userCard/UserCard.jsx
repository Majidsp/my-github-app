import "./UserCard.css";
import { useSelector, useDispatch } from "react-redux";
import { selectFavoritesItems } from "../../redux/selectors/favorites.selectors";
import {
    addToFavoriteItem,
    removeFromFavoriteItems,
} from "../../redux/actions/favorites.actions";

const UserCard = ({ user, key }) => {
    const { login, avatar_url, html_url, score } = user;
    const favoriteItems = useSelector(selectFavoritesItems);
    const dispatch = useDispatch();

    const isInFavoriteItems = favoriteItems.find(
        (item) => item.login === login
    );

    const handleFavorite = () => {
        if (!isInFavoriteItems) {
            dispatch(addToFavoriteItem(user));
        } else {
            dispatch(removeFromFavoriteItems(user));
        }
    };

    return (
        <div className="user-card" key={key}>
            <h4>{login}</h4>
            <img src={avatar_url} alt="" style={{ height: 50 }} />
            <h5>
                Github URL:
                <a href={html_url} target="_blank" rel="noreferrer">
                    {html_url}
                </a>
            </h5>
            <h5>Score: {score}</h5>
            <button onClick={handleFavorite}>
                {isInFavoriteItems ? "Saved" : "Save"}
            </button>
        </div>
    );
};

export default UserCard;
