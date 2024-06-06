import Header from "./components/Header";
import Filter from "./ui/Filter";
import User from "./components/User";
import { useAppContext } from "./context/useAppContext";

function shouldRenderUser(user, filteredValues) {
  const userValues = [...user.tools, ...user.languages, user.role, user.level];
  return (
    filteredValues.length === 0 ||
    filteredValues.every((value) => userValues.includes(value))
  );
}

function App() {
  const { state, users } = useAppContext();

  const filteredUsers = users.filter((user) =>
    shouldRenderUser(user, state.filtered)
  );

  return (
    <>
      <Header />
      {state.filtered.length > 0 && <Filter />}

      <div className="container px-4 mx-auto">
        <div
          className={`flex flex-col items-center gap-10 mb-16 ${
            state.filtered.length > 0 ? "mt-1" : "mt-12"
          }`}
        >
          {filteredUsers.map((user) => (
            <User key={user.id} user={user} />
          ))}
        </div>
      </div>
      <footer className="absolute bottom-0 w-full pb-2 text-base text-center text-stone-300">
        Developed by{" "}
        <a
          href="https://haassaaaannnn.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Rahul{" "}
        </a>
        &lt;3
      </footer>
    </>
  );
}

export default App;
