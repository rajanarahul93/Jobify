import { createContext, useEffect, useReducer, useState } from "react";

export const AppContext = createContext();

const initialState = {
  filtered: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.filtered.includes(action.payload)) {
        return { ...state, filtered: [...state.filtered, action.payload] };
      }
      return state;
    case "REMOVE_ITEM":
      return {
        ...state,
        filtered: state.filtered.filter((item) => item !== action.payload),
      };
    case "RESET":
      return {
        ...state,
        filtered: [],
      };
    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/public/data/data.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch, users }}>
      {children}
    </AppContext.Provider>
  );
};
