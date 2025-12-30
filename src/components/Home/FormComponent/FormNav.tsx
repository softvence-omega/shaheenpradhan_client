import logo from "@/assets/logo/main_logo.png";
import { Link } from "react-router-dom";
const FormNav = () => {
  return (
    <div className="my-10">
        <Link to="/"><img className="max-[768px]:h-9" src={logo} alt="logo" /></Link>
    </div>
  )
}

export default FormNav;