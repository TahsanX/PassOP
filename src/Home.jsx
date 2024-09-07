import React, { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
const ShowToast = () => {
  toast("Copied to clipboard", {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};
const Home = () => {
  const [obj, setobj] = useState({
    name: "",
    password: "",
    website: "",
    id: "",
    edit: false,
  });
  const [arr, setarr] = useState(() => {
    const retrieve = localStorage.getItem("arr");
    return JSON.parse(retrieve) || [];
  });
  const [iconClass, setIconClass] = useState(() => {
    return localStorage.getItem("iconClass") || "fa-solid fa-eye-slash";
  });
  const Handleedittoggle = (id) => {
    setarr(
      arr.map((obj) => {
        if (obj.id === id) {
          return { ...obj, edit: !obj.edit };
        }
        return obj;
      })
    );
  };
  const HandleCancel = () => {
    setobj({ name: "", password: "", website: "", id: "" });
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    const newObj = { ...obj, id: uuidv4() };
    const updatedArr = [...arr, newObj];
    setarr(updatedArr);
    localStorage.setItem("arr", JSON.stringify(updatedArr));
    setobj({ name: "", password: "", website: "", id: "" });
  };

  const HandleNameChange = (e) => {
    if (e.target.id === "name") {
      setobj({ ...obj, name: e.target.value });
    } else if (e.target.id === "pass") {
      setobj({ ...obj, password: e.target.value });
    } else {
      setobj({ ...obj, website: e.target.value });
    }
  };

  const ref = useRef(iconClass);

  const ChangeVisible = () => {
    if (ref.current === "fa-solid fa-eye-slash") {
      ref.current = "fa-solid fa-eye";
    } else {
      ref.current = "fa-solid fa-eye-slash";
    }
    setIconClass(ref.current);
    localStorage.setItem("iconClass", ref.current);
  };
  const Handleeditchange = (id, e) => {
    setarr(
      arr.map((obj) => {
        if (obj.id === id) {
          if (e.target.id === "namedisplay") {
            return { ...obj, name: e.target.value, edit: true };
          } else if (e.target.id === "passdisplay") {
            return { ...obj, password: e.target.value, edit: true };
          } else {
            return { ...obj, website: e.target.value, edit: true };
          }
        }
        return obj;
      })
    );
  };
  const Delete = (id) => {
    setarr(arr.filter((obj) => obj.id != id));
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      <form>
        <div className="h-full">
          <div className="space-y-12 flex w-full justify-center">
            <div className="border-b border-gray-900/10 xl:w-1/2 pb-12 w-3/4">
              <div className="flex w-full justify-center items-center text-center">
                <div class="logo-container">
                  <ul>
                    <li>
                      <div class="logo-holder logo-4">
                        <a href="">
                          <h3>PassOP</h3>
                          <p>Innovation</p>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Your Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="name"
                      value={obj.name}
                      type="text"
                      onChange={HandleNameChange}
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 px-2 font-serif text-xl text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="pass"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="mt-2">
                    <input
                      id="pass"
                      name="last-name"
                      value={obj.password}
                      onChange={HandleNameChange}
                      type={`${
                        iconClass === "fa-solid fa-eye-slash"
                          ? "password"
                          : "text"
                      }`}
                      autoComplete="family-name"
                      className="rounded-md border-0 mx-1 py-1.5 px-2 font-serif text-xl text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
                    />

                    <i className={iconClass} onClick={ChangeVisible}></i>
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="website"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Website
                  </label>
                  <div className="mt-2">
                    <input
                      id="website"
                      name="email"
                      value={obj.website}
                      onChange={HandleNameChange}
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 px-2 font-serif text-xl py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-x-6">
            <button
              type="button"
              onClick={HandleCancel}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={HandleSubmit}
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
      <div className="h-screen flex justify-center">
        <div className="overflow-x-auto">
          <div className="container mx-auto p-4">
            <h1 className="text-5xl text-center pt-4 mb-4">Users</h1>
            {arr.length ? (
              <div>
                <p className="mb-4">
                  A list of all the users in your account including their name,
                  password, and website.
                </p>
                <table className="w-full mt-4">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 text-left">Name</th>
                      <th className="px-4 py-2 text-left">Password</th>
                      <th className="px-4 py-2 text-left">Website</th>
                      <th className="px-4 py-2 text-left"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {arr.map((user) => (
                      <React.Fragment key={user.id}>
                        <tr>
                          <td className="px-4 py-2">
                            <input
                              id="namedisplay"
                              onChange={(e) => {
                                Handleeditchange(user.id, e);
                              }}
                              value={user.name}
                              disabled={!user.edit}
                              className={`${
                                user.edit === true
                                  ? "rounded-md border-0 mx-1 py-1.5 px-2 w-min font-serif text-xl text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
                                  : "bg-white mx-1 py-1.5 px-2 font-serif text-xl text-gray-900 placeholder:text-gray-400 focus:ring-2 sm:leading-6"
                              }`}
                            />
                          </td>
                          <td className="px-4 py-2">
                            <input
                              id="passdisplay"
                              value={user.password}
                              onChange={(e) => {
                                Handleeditchange(user.id, e);
                              }}
                              disabled={!user.edit}
                              className={`${
                                user.edit === true
                                  ? "rounded-md border-0 mx-1 py-1.5 px-2 w-min font-serif text-xl text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
                                  : "bg-white mx-1 py-1.5 px-2 font-serif text-xl text-gray-900 placeholder:text-gray-400 focus:ring-2 sm:leading-6"
                              }`}
                            />
                            {!user.edit ? (
                              <CopyToClipboard text={user.password}>
                                <button
                                  onClick={() => {
                                    ShowToast();
                                  }}
                                  className="hover:text-blue-500"
                                >
                                  <i className="fa-solid fa-copy"></i>
                                </button>
                              </CopyToClipboard>
                            ) : (
                              ""
                            )}
                          </td>
                          <td className="px-4 py-2">
                            <input
                              value={user.website}
                              onChange={(e) => {
                                Handleeditchange(user.id, e);
                              }}
                              disabled={!user.edit}
                              className={`${
                                user.edit === true
                                  ? "rounded-md border-0 mx-1 py-1.5 px-2 font-serif text-xl text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
                                  : "bg-white mx-1 py-1.5 px-2 font-serif text-xl text-gray-900 placeholder:text-gray-400 focus:ring-2 sm:leading-6"
                              }`}
                            />
                            {!user.edit ? (
                              <CopyToClipboard text={user.website}>
                                <button
                                  onClick={() => {
                                    ShowToast();
                                  }}
                                  className="hover:text-blue-500"
                                >
                                  <i className="fa-solid fa-copy"></i>
                                </button>
                              </CopyToClipboard>
                            ) : (
                              ""
                            )}
                          </td>
                          <td className="px-4 py-2">
                            <button
                              onClick={() => Handleedittoggle(user.id)}
                              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                            >
                              {user.edit ? "Save" : "Edit"}
                            </button>
                          </td>
                          <td className="px-4 py-2">
                            <button
                              onClick={() => {
                                Delete(user.id);
                              }}
                              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan="5">
                            <hr className="my-2" />
                          </td>
                        </tr>
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div>
                <p className="text-center text-red-500 text-3xl">No Entries</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
