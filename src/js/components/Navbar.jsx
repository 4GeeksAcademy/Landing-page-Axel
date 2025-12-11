import React from "react";
const NavBar = () => {
  return (
    <nav className="navbar bg-secondary-subtle border-bottom border-body" data-bs-theme="dark">
      <div className="container-fluid mx-0 ">
        <a className="navbar-brand" href="https://www.youtube.com/watch?v=emv338RKoY4">
         <img src="https://www.teamhitless.com/wp-content/uploads/2020/09/ds2logo.png" alt="DarkSouls Logo" height={'100vh'}/>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="https://www.reddit.com/r/DarkSouls2/comments/13i9y4v/dark_souls_2_is_the_best_in_the_series_and_i_will/">
                It is DarkSouls II the best Souls... ?
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.reddit.com/r/DarkSouls2/comments/p7tfyz/just_beat_my_first_bossthe_three_little_pigs_of/">
                The most Difficult Boss in Souls II!
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.reddit.com/r/DarkSouls2/comments/rbx5kt/charred_loyce_knights_are_impossible/">
                Ivory is really hard or the knights are already useless...?
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
