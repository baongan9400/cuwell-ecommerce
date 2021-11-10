import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./CreatePost.scss";

import bgImage from "assets/images/bg-create-post.png";
import uploadImage from "assets/images/upload-img.png";

const CreatePost = () => {
  const [isShowPassword, setIsShowPassword] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email format").required("Required!"),
      password: Yup.string()
        .min(5, "Minimum 5 characters")
        .required("Required!"),
    }),
    onSubmit: (values) => {
      console.log("values: ", values);
    },
  });
  const touched = formik.touched;
  const error = formik.errors;
  const values = formik.values;

  return (
    <div className="createPost-bgr">
      <img src={bgImage} alt="bgImage" className="bgImage" />
      <div className="createPost-wrapper">
        <div className="createPost-wrapper-title">
          <h2 className="createPost-title">CREATE YOUR POST</h2>
        </div>

        <div className="createPost-form">
          <form onSubmit={formik.handleSubmit} className="row">
            <div className="group-editor col-6">
              <div className="form-group createPost-form-group">
                <label>Title</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  name="email"
                  value={values.email}
                  onChange={formik.handleChange}
                />
                {error.email && touched.email && (
                  <p className="errors">{error.email}</p>
                )}
              </div>
              <div className="createPost-form-group ">
                <label>Price</label>
                <input
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  value={values.confirm_password}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="createPost-form-group ">
                <label>Quantity</label>
                <div class="quantity-control" data-quantity="">
                  <button class="quantity-btn" data-quantity-minus="">
                    <svg viewBox="0 0 409.6 409.6">
                      <g>
                        <g>
                          <path d="M392.533,187.733H17.067C7.641,187.733,0,195.374,0,204.8s7.641,17.067,17.067,17.067h375.467 c9.426,0,17.067-7.641,17.067-17.067S401.959,187.733,392.533,187.733z" />
                        </g>
                      </g>
                    </svg>
                  </button>
                  <input
                    type="number"
                    class="quantity-input"
                    data-quantity-target=""
                    value="1"
                    step="1"
                    min="1"
                    max=""
                    name="quantity"
                  />
                  <button class="quantity-btn" data-quantity-plus="">
                    <svg viewBox="0 0 426.66667 426.66667">
                      <path d="m405.332031 192h-170.664062v-170.667969c0-11.773437-9.558594-21.332031-21.335938-21.332031-11.773437 0-21.332031 9.558594-21.332031 21.332031v170.667969h-170.667969c-11.773437 0-21.332031 9.558594-21.332031 21.332031 0 11.777344 9.558594 21.335938 21.332031 21.335938h170.667969v170.664062c0 11.777344 9.558594 21.335938 21.332031 21.335938 11.777344 0 21.335938-9.558594 21.335938-21.335938v-170.664062h170.664062c11.777344 0 21.335938-9.558594 21.335938-21.335938 0-11.773437-9.558594-21.332031-21.335938-21.332031zm0 0" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="form-group createPost-form-group">
                <label>Description</label>
                <textarea
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  name="email"
                  value={values.email}
                  onChange={formik.handleChange}
                />
                {error.email && touched.email && (
                  <p className="errors">{error.email}</p>
                )}
              </div>
            </div>
            <div className="col-6 upload-img-wrapper">
              <div className="img-display">
                <img src={uploadImage}></img>
              </div>
              <label htmlFor="file" className="btn-upload">
                {/* <button className="btn-upload" type="button"> */}
                <svg
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  fill=""
                  xmlns="http://www.w3.org/2000/svg"
                  className="ms-3"
                >
                  <path
                    d="M2 0C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V12C0 12.5304 0.210714 13.0391 0.585786 13.4142C0.960859 13.7893 1.46957 14 2 14H14C14.5304 14 15.0391 13.7893 15.4142 13.4142C15.7893 13.0391 16 12.5304 16 12V2C16 1.46957 15.7893 0.960859 15.4142 0.585786C15.0391 0.210714 14.5304 0 14 0H2ZM14 1C14.2652 1 14.5196 1.10536 14.7071 1.29289C14.8946 1.48043 15 1.73478 15 2V8.5L11.223 6.553C11.1292 6.50602 11.023 6.48973 10.9195 6.50642C10.8159 6.52311 10.7203 6.57194 10.646 6.646L6.936 10.356L4.276 8.584C4.17996 8.52006 4.06476 8.4913 3.94994 8.5026C3.83512 8.5139 3.72773 8.56456 3.646 8.646L1 11V2C1 1.73478 1.10536 1.48043 1.29289 1.29289C1.48043 1.10536 1.73478 1 2 1H14Z"
                    fill="#fff"
                  />
                </svg>
                <span className="ms-4">Upload image</span>
                <input
            type="file"
            id="file"
            style={{ display: "none" }}
            // onChange={(event) => handleChange(event)}
          />
              </label>
              <div className="img-display-group row mt-5">
                <img className="col-4" src={uploadImage}></img>
                <img className="col-4" src={uploadImage}></img>
                <img className="col-4" src={uploadImage}></img>
              </div>
            </div>
            <button className="btn-create" type="submit">
              CREATE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
