import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Create() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://668140f704acc3545a062c12.mockapi.io/crud", {
        e_name: name,
        e_email: email,
        e_pass: pass,
      })
      .then(() => {
        navigate("/");
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card shadow-lg">
            <div className="card-header text-center bg-primary text-white">
              <h4>Create User</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter Name"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter Email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter Password"
                    className="form-control"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                  />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">
                    Add
                  </button>
                </div>
              </form>
            </div>
            <div className="card-footer text-center bg-light">
              <p>
                <strong>Name:</strong> {name}
              </p>
              <p>
                <strong>Email:</strong> {email}
              </p>
              <p>
                <strong>Password:</strong> {pass}
              </p>
            </div>
          </div>
          <div className=" text-center text-white">
            <h4>
              <Link to="/">View Data</Link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Create;
