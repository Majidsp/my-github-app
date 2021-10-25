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
