import React from "react";

function Footer() {
  return (
    <div className="footer d-flex justify-content-around mt-5">
      <p>&copy; 2017-2020</p>
      <ul className="nav flex-column">
        <h5 className="nav-item px-3">Features</h5>
        <li className="nav-item">
          <a className="nav-link active" href="#">
            Cool stuff
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-secondary" href="#">
            Random feature
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-secondary" href="#">
            Team feature
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-secondary">Stuff for developers</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-secondary">Another one</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-secondary">Last time</a>
        </li>
      </ul>
      <ul class="nav flex-column">
        <h5 class="nav-item px-3">Resources</h5>
        <li class="nav-item">
          <a class="nav-link text-secondary" href="#">
            Resource
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-secondary" href="#">
            Resource name
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-secondary">Another resource</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-secondary">Final resource</a>
        </li>
      </ul>
      <ul class="nav flex-column">
        <h5 class="nav-item px-3">About</h5>

        <li class="nav-item">
          <a class="nav-link text-secondary" href="#">
            Team
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-secondary" href="#">
            Locations
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-secondary">Privacy</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-secondary">Terms</a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
