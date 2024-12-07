import Home from "../pages/Home";
import Follwing from "../pages/Following";
import Upload from "../pages/Upload";
import { HeaderOnly } from "../components/Layout";
const publicRoutes = [
    { path: "/", component: Home },
    { path: "following", component: Follwing },
    { path: "upload", component: Upload, layout: HeaderOnly },
];

const privateRoutes = [

];

export { publicRoutes, privateRoutes };