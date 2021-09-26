import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.jpg";
import { Icon } from "react-icons-kit";
import { shoppingCart } from "react-icons-kit/feather/shoppingCart";
import { auth } from "../Util/Util";
import { useHistory } from "react-router-dom";

export const Navbar = ({ user }) => {
  const history = useHistory();

  const handleLogout = () => {
    auth.signOut().then(() => {
      history.push("/login");
    });
  };

  return (
    <div className="navb">
      <div className="leftside">
        <div className="logo">
          <img src={logo} alt="logo unavailble" height="50" width="50" />
        </div>
      </div>

      <div className="rightside">
        {!user && (
          <React.Fragment>
            <div>
              <Link className="navlink" to="signup">
                SignUp
              </Link>
            </div>
            <div>
              <Link className="navlink" to="login">
                Login
              </Link>
            </div>
          </React.Fragment>
        )}

        {user && (
          <React.Fragment>
            <div>
              <Link className="navlink" to="/">
                {user}
              </Link>
            </div>
            <div className="cart-menu-btn">
              <Link className="navlink" to="cart">
                <Icon icon={shoppingCart} size={20} />
              </Link>
            </div>
            <div className="btn btn-danger btn-md" onClick={handleLogout}>
              LOGOUT
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};
