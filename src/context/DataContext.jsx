import { createContext, useReducer } from "react";
const DataContext= createContext();

const initialData = {
  theme: localStorage.getItem("mytheme")?? "ligth"
};
const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return { ...state, theme: action.newValue };
    default:
      return state;
  }
};

export function DataProvider({ children }) {
const [firstState, dispatch] = useReducer(reducer, initialData);


const changeTheme = (newValue) => {
  localStorage.setItem("mytheme", newValue);
dispatch({ type: "CHANGE_THEME", newValue: newValue});
};
return (
<DataContext.Provider value={{ ...firstState,changeTheme}}>
{children}
</DataContext.Provider>
);
}
export default DataContext;
