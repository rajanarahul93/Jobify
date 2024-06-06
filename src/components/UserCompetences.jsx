import { useAppContext } from "../context/useAppContext";

const ADD_ITEM = "ADD_ITEM";

function UserCompetences({ user }) {
  const { dispatch } = useAppContext();

  return (
    <>
      <div className="flex gap-3 flex-wrap xs:justify-end justify-start">
        <span
          className="span"
          onClick={() => dispatch({ type: ADD_ITEM, payload: user.role })}
        >
          {user.role}
        </span>
        <span
          className="span"
          onClick={() => dispatch({ type: ADD_ITEM, payload: user.level })}
        >
          {user.level}
        </span>
        {user.tools?.map((tool, index) => (
          <span
            onClick={() => dispatch({ type: ADD_ITEM, payload: tool })}
            className="span"
            key={index}
          >
            {tool}
          </span>
        ))}
        {user.languages?.map((lan, index) => (
          <span
            onClick={() => dispatch({ type: ADD_ITEM, payload: lan })}
            className="span"
            key={index}
          >
            {lan}
          </span>
        ))}
      </div>
    </>
  );
}

export { UserCompetences };
