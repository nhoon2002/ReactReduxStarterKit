import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";



import { sampleReducer } from "./sampleReducer.jsx";
// import { createAccReducer } from "./createAccReducer";
// import { checkSessionReducer } from "./checkSessionReducer";
// import { loginReducer } from "./loginReducer";
// import { tmdbReducer } from "./tmdbReducer";



const rootReducer = combineReducers({
	sampleReducer,
	// createAccReducer,
	// checkSessionReducer,
	// loginReducer,
	// tmdbReducer,
	routing: routerReducer
});
export default rootReducer;
