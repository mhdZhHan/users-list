import Navbar from "./includes/Navbar"
import Footer from "./includes/Footer"
const Layout = ({ children }) => {
    return ( 
        <div className="content">
            <Navbar />
            { children }
            <Footer />
        </div>
     );
}
 
export default Layout;