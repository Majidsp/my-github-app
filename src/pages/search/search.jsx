import React, { useState } from "react";
import { fetchUser } from "../../utils/fetch-data";
import UserCard from "../../components/userCard/UserCard";

const Search = () => {
    const [searchValue, setSearchValue] = useState("");
    const [loading, setLoading] = useState(false);
    const [usersData, setUsersData] = useState(false);

    const handleChange = (event) => {
        const { value } = event.target;
        setSearchValue(value);
    };

    const handleSearch = async () => {
        setLoading(true);
        try {
            const result = await fetchUser(searchValue);
            setUsersData(result);
        } catch (err) {
            console.error(err);
            setLoading(false);
        }
        setLoading(false);
    };

    return (
        <div>
            <input type="text" data-cy="user-query" onChange={handleChange} />
            <button
                data-cy="user-search-btn"
                onClick={handleSearch}
                disabled={!searchValue}
            >
                Search
            </button>
            {usersData && (
                <div>
                    <h4>{usersData.total_count} users have been found</h4>
                </div>
            )}

            {usersData.items && usersData.items.length
                ? usersData.items.map((item) => (
                      <UserCard user={item} key={item.id} />
                  ))
                : null}
            {loading && <h4>Users data are being fetched</h4>}
        </div>
    );
};

export default Search;
