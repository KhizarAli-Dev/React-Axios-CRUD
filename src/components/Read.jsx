import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Read() {
  // FETCH
  const [apiData, setApiData] = useState([]);
  const getData = () => {
    axios
      .get("https://668140f704acc3545a062c12.mockapi.io/crud")
      .then((response) => {
        setApiData(response.data);
      });
  };

  // UPDATE
  const setToStorage = (id, name, email, password) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("pass", password);
  };

  // DELETE
  const handleDelete = (id) => {
    axios
      .delete("https://668140f704acc3545a062c12.mockapi.io/crud/" + id)
      .then(() => {
        getData();
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-12">
          <div className="card shadow-lg">
            <div className="card-header bg-primary text-white text-center">
              <h4>User Data</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered table-hover">
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Id</th>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Password</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {apiData.map((item) => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.e_name}</td>
                        <td>{item.e_email}</td>
                        <td>{item.e_pass}</td>
                        <td>
                          <button
                            onClick={() => handleDelete(item.id)}
                            className="btn btn-danger btn-sm me-2"
                          >
                            DELETE
                          </button>
                          <button
                            onClick={() =>
                              setToStorage(
                                item.id,
                                item.e_name,
                                item.e_email,
                                item.e_pass
                              )
                            }
                            className="btn text-white btn-sm"
                          >
                            <Link to="/Update">UPDATE</Link>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="card-footer text-center">
              <h4>
                <Link to="/Create" className=" text-center">
                  Add Data
                </Link>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Read;
