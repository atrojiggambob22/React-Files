import {Outlet, Link} from "react-router-dom";
import '../App.css'

const Layouts = () => {
  return (
            <>
                <nav className="bg-black">
                    <ul>
                        <li>
                            <Link style={{color:"white"}} to="/">
                            Home
                            </Link>
                        </li>

                        <li>
                           <Link style={{color:"black"}} to="/Blogs">
                           Blogs
                           </Link>
                        </li>

                        <li>
                           <Link style={{color:"black"}} to="Contact">
                           Contact
                           </Link>
                        </li>

                        <li>
                           <Link style={{color:"black"}} to="/Services">
                           Services
                           </Link>
                        </li>

                       
                    </ul>
                </nav>
                    <Outlet/>
            </>

  )
}

export default Layouts