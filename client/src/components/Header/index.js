import React from "react";
import Auth from "../../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="bg-info text-dark mb-4 py-3 display-flex align-center">
      <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
        {/* {Auth.loggedIn() ? (
          <>
            <a className="text-dark" href="/dashboard">
              <h1 className="m-0" style={{ fontSize: "3rem" }}>
                RealFantasy
              </h1>
            </a>
          </> */}
        {/* ) : ( */}
        {/* <> */}
        <a className="text-dark" href="/">
          <h1 className="m-0" style={{ fontSize: "3rem" }}>
            RealFantasy
          </h1>
        </a>
        {/* </>
        )} */}
        <p className="m-0" style={{ fontSize: "1.75rem", fontWeight: "700" }}>
          A weekly fantasy app for die hard footy fans!
        </p>
        <div>
          {Auth.loggedIn() ? (
            <>
              <a className="btn btn-lg btn-primary m-2" href="/dashboard">
                Your Dashboard
              </a>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <a className="btn btn-lg btn-primary m-2" href="/login">
                Login
              </a>
              <a className="btn btn-lg btn-light m-2" href="/signup">
                Signup
              </a>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
