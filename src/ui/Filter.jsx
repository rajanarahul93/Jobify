import { useAppContext } from "../context/useAppContext";

const REMOVE_ITEM = "REMOVE_ITEM";
const RESET = "RESET";

function Filter() {
  const { state, dispatch } = useAppContext();

  return (
    <div className="filtered">
      <div className="flex gap-4 w-full flex-wrap">
        {state.filtered.map((item) => (
          <span
            key={item}
            className="span"
            onClick={() => dispatch({ type: REMOVE_ITEM, payload: item })}
          >
            {item}
          </span>
        ))}
      </div>
      <span
        className="text-DesaturatedDarkCyan cursor-pointer"
        onClick={() => dispatch({ type: RESET })}
        role="button"
        tabIndex="0"
      >
        Clear
      </span>
    </div>
  );
}

export default Filter;
