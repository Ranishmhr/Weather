import Dashboard from "./component/Dashboard";
import MovieDescription from "./views/MovieDescription/MovieDescription";
import Search from "./views/Search/Search";
import Settings from "./views/Settings/Settings";
import WelcomeContent from "./views/welcome/container/WelcomeContent";

export default [
    { path:"/search/:search", component:Search, exact:true},
    { path:"/settings", component:Settings, exact:true},
    { path:"/:id", component:MovieDescription, exact:true},
    { path:"", component:WelcomeContent, exact:true},
];
