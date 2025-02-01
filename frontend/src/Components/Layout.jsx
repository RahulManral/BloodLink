import { Outlet } from 'react-router-dom'
import Navbar from './Navbar';
import Footer from './Footer';
1


const Layout = () => {
    return (
        <>
        <Navbar />
        <Outlet />
        <Footer />
        </>
     );
}
 
export default Layout;