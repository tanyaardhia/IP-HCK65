import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();


  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
   
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl" href="/">
            {" "}
            Ethereal Movies{" "}
          </a>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://images.rawpixel.com/image_png_social_square/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <button
                onClick={() => {
                  // console.log("logout navbar");
                  localStorage.removeItem("access_token");
                  localStorage.removeItem("id");
                  localStorage.removeItem("status");
                  navigate("/login");
                }}
              >
                <a>Sign Out</a>
              </button>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
