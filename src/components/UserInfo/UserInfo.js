import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChalkboardUser } from "@fortawesome/free-solid-svg-icons";
import myImg from "../../images/devMazed.png";

const UserInfo = () => {
  return (
    <div>
      <div className="d-flex align-items-center gap-3">
        <div>
          <img
            className="rounded-pill mb-2"
            src={myImg}
            alt="devmazed-img"
            width="60px"
          />
        </div>
        <div>
          <h4 className="mb-1">Md. Mazedul Islam</h4>
          <div className="d-flex gap-2">
            <p className="opacity-75">
              <FontAwesomeIcon icon={faChalkboardUser}></FontAwesomeIcon>
            </p>
            <small className="text-secondary">Web Developer</small>
          </div>
        </div>
      </div>

      <div className="bg-light rounded-3 mt-3">
        <div className="d-flex justify-content-evenly gap-4">
          <p>
            <h4 className="mb-0 mt-3 fw-bold">70
              <sub className="text-secondary fw-normal"> <small>Kg</small>
              </sub>
            </h4>Weight
          </p>
          <p>
            <h4 className="mb-0 mt-3 fw-bold">5.8
              <sup className="text-secondary fw-normal">
                <small>"</small>
              </sup>
            </h4>Height
          </p>
          <p>
            <h4 className="mb-0 mt-3 fw-bold">26
              <sub className="text-secondary fw-normal">
                <small> Yrs</small>
              </sub></h4>Age
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
