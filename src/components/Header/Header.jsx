import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className="flex gap-4 text-center justify-center font-bold text-green-500 mt-40 mb-3">
            <Link to ='/'>Home</Link>
            <Link to ='/login'>LogIn</Link>
        </div>
    );
};

export default Header;