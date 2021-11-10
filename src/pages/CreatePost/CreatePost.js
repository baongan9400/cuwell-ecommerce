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
              <button className="btn-upload" type="button">
                Upload image
              </button>
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
