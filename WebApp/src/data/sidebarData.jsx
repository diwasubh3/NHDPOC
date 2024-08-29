import { RiSettings5Fill,RiHome2Fill,RiListView,RiUser3Fill } from "react-icons/ri";
const sidebarData=[
    {
        path:"/dashboard",
        name:"Dashboard",
        icon:<RiHome2Fill/>
    },
    {
        path:"/about",
        name:"Orders",
        icon:<RiUser3Fill/>
    },
    {
        path:"/analytics",
        name:"Resources",
        icon:<RiListView/>
    },
    {
        path:"/analytics",
        name:"Settings",
        icon:<RiSettings5Fill/>
    }
]

export default sidebarData;