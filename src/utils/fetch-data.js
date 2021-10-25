export const fetchUser = async (query) => {
    const response = await fetch(
        `https://api.github.com/search/users?q=${query}`
    );
    if (!response.ok) {
        throw new Error("Something went wrong!");
    }

    const result = await response.json();

    return result;
};

export const fetchTeamUsers = async (query, followers) => {
    const maxNumberOfFollowers = followers / 3;
    const response = await fetch(
        `https://api.github.com/search/users?per_page=100&q=${query}+followers:%3C${maxNumberOfFollowers}&sort=followers`
    );
    if (!response.ok) {
        throw new Error("Something went wrong!");
    }

    const result = await response.json();

    return result;
};
