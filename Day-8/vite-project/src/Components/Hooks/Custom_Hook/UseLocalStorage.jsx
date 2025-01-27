import UseLocal from "./Sample";
const UseLocalStorage = () => {
    const [user, setUser] = UseLocal("UserID", ""); // Provide an initial value
    const [pass, setPass] = UseLocal("Password", ""); // Provide an initial value
    return (
        <div>
            <h2>Custom Hook with localStorage</h2>
            <input
                type="text"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                placeholder="Enter username"
            />
            <br />
            <input
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder="Enter password"
            />
            <h3>The text is: {user}</h3>
        </div>
    );
};
export default UseLocalStorage;