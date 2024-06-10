/* eslint-disable react/prop-types */


const Navbar = ({ setCategory }) => {

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/"><span className="badge text-dark bg-light fs-4">New letter</span></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <div className="nav-link active" aria-current="page"
                onClick={() => setCategory("general")}>General</div>
            </li>
            <li className="nav-item">
              <div className="nav-link active" aria-current="page"
                onClick={() => setCategory("technology")}>Technology</div>
            </li>
            <li className="nav-item">
              <div className="nav-link active" aria-current="page"
                onClick={() => setCategory("science")}>Science</div>
            </li>
            <li className="nav-item dropdown">
              <div className="nav-link dropdown-toggle active" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Others
              </div>
              <ul className="dropdown-menu">
                <li><div className="dropdown-item"
                  onClick={() => setCategory("sports")}>Sports</div></li>
                <li><div className="dropdown-item"
                  onClick={() => setCategory("entertainment")}>Entertainment</div></li>
                <li><div className="dropdown-item"
                  onClick={() => setCategory("health")}>Health</div></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;