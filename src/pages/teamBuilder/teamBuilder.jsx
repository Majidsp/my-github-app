import { useState } from "react";
import TeamUserCard from "../../components/teamUserCard/teamUserCard";
import { fetchTeamUsers } from "../../utils/fetch-data";

const TeamBuilder = () => {
    const [followers, setFollowers] = useState(0);
    const [searchQuery, setSearchQuery] = useState("");
    const [matchedUsers, setMatchedUsers] = useState([]);

    const handleChange = (event) => {
        const { value, name } = event.target;
        if (name === "followers") {
            setFollowers(value);
        }
        if (name === "searchQuery") {
            setSearchQuery(value);
        }
    };

    const handleSearch = async () => {
        try {
            const result = await fetchTeamUsers(searchQuery, followers);
            if (result.items.length === 3) {
                setMatchedUsers(result.items);
            }
            if (result.items.length > 3) {
                setMatchedUsers(result.items.slice(0, 3));
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <label htmlFor="followers">Followers:</label>
            <input type="number" name="followers" onChange={handleChange} />
            <label htmlFor="searchQuery">Search query:</label>
            <input type="text" name="searchQuery" onChange={handleChange} />
            <button onClick={handleSearch}>Search</button>
            {matchedUsers.length > 0 &&
                matchedUsers.map((item) => (
                    <TeamUserCard user={item} key={item.login} />
                ))}
        </div>
    );
};

export default TeamBuilder;
