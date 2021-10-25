import "./teamUserCard.css";

const teamUserCard = ({ user }) => {
    const { login, avatar_url, html_url } = user;

    return (
        <div className="team-user-card ">
            <img src={avatar_url} alt="" style={{ height: 50 }} />
            <h4>{login}</h4>
            <a href={html_url} target="_blank" rel="noreferrer">
                Repo Link
            </a>
        </div>
    );
};

export default teamUserCard;
