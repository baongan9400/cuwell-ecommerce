import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./CreatePost.scss";
import { useSelector } from "react-redux";
import { pushToast } from "components/Toast";

import bgImage from "assets/images/bg-create-post.png";
import uploadImage from "assets/images/upload-img.png";
import NavBar from "components/NavBar/NavBar";
import { createPost } from "api/posts/search";

const CreatePost = () => {
  const [image, setImage] = useState({
    first: null,
    second: null,
    third: null,
  });

  const [previewImage, setPreviewImage] = useState(null);
  const { data } = useSelector((state) => state.categoryReducer);
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      title: "",
      price: "",
      description: "",
      quantity: 1,
      category: 2,
      images: image,
    },
    validationSchema: Yup.object({}),
    onSubmit: (values) => {
      let formData = new FormData();
      formData.append("title", values.title);
      formData.append("description", values.description);
      formData.append("price", values.price);
      formData.append("quantity", count);
      formData.append("category", values?.category);
      formData.append("images", image?.first);
      formData.append("images", image?.second);
      formData.append("images", image?.third);
      callCreatePost(formData);
    },
  });
  const touched = formik.touched;
  const error = formik.errors;
  const values = formik.values;
  const handleImgChange = (event) => {
    if (event.target.files[0] !== undefined) {
      if (image.first === null || image.third) {
        setImage({
          ...image,
          first: event.target.files[0],
        });
        setPreviewImage(event.target.files[0]);
        formik.setFieldValue("images.first", event.target.files[0]);
      } else if (image.first !== undefined && image.second === null) {
        setImage({
          ...image,
          second: event.target.files[0],
        });
        setPreviewImage(event.target.files[0]);
        formik.setFieldValue("images.second", event.target.files[0]);
      } else if (image.second !== undefined && image.third === null) {
        setImage({
          ...image,
          third: event.target.files[0],
        });
        setPreviewImage(event.target.files[0]);
        formik.setFieldValue("images.third", event.target.files[0]);
      }
    }
  };
  let [count, setCount] = useState(1);

  function incrementCount() {
    count = count + 1;
    setCount(count);
  }
  function decrementCount() {
    count = count - 1;
    setCount(count);
  }
  const callCreatePost = async (data) => {
    try {
      setLoading(true);
      const result = await createPost(data);
      if (result) {
        setLoading(false);
        pushToast("success", "Successfully posted products for sale.");
      }
    } catch (error) {
      setLoading(false);
      pushToast("error", "Failed to create product");
    }
  };
  return (
    <>
      <NavBar />
      <div className={loading ? "loading-bg" : "loading-bg d-none"}>
        <img
          src="https://cutewallpaper.org/21/loading-gif-transparent-background/Free-Content-Discovery-Influencer-Marketing-Tool-Buzzsumo-.gif"
          alt="Loading..."
        />
      </div>
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
                    type="title"
                    className="form-control"
                    placeholder="Enter your title"
                    name="title"
                    value={values.title}
                    onChange={formik.handleChange}
                  />
                  {error.title && touched.title && (
                    <p className="errors">{error.title}</p>
                  )}
                </div>
                <div className="createPost-form-group ">
                  <label>Price</label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    placeholder="Enter your price"
                    value={values.price}
                    onChange={formik.handleChange}
                  />
                </div>
                <div className="createPost-form-group ">
                  <label>Category</label>
                  <select
                    className="form-control border-0 shadow-sm px-4 address"
                    style={{
                      backgroundColor: "#e7e7e7",
                      textTransform: "capitalize",
                    }}
                    onChange={(e) => {
                      if (data.length > 0) {
                        formik.setFieldValue("category", e.target.value);
                      }
                    }}
                    required
                  >
                    {data.length > 0 &&
                      data.map((value, index) => (
                        <option value={value.id} id={value.id} key={value.id}>
                          {value.name}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="createPost-form-group ">
                  <label>Quantity</label>
                  <div class="quantity-control" data-quantity="">
                    <button
                      class="quantity-btn"
                      onClick={decrementCount}
                      type="button"
                    >
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
                      step="1"
                      min="1"
                      max="100"
                      name="quantity"
                      value={count}
                      onChange={formik.handleChange}
                    />
                    <button
                      class="quantity-btn"
                      onClick={incrementCount}
                      type="button"
                    >
                      <svg viewBox="0 0 426.66667 426.66667">
                        <path d="m405.332031 192h-170.664062v-170.667969c0-11.773437-9.558594-21.332031-21.335938-21.332031-11.773437 0-21.332031 9.558594-21.332031 21.332031v170.667969h-170.667969c-11.773437 0-21.332031 9.558594-21.332031 21.332031 0 11.777344 9.558594 21.335938 21.332031 21.335938h170.667969v170.664062c0 11.777344 9.558594 21.335938 21.332031 21.335938 11.777344 0 21.335938-9.558594 21.335938-21.335938v-170.664062h170.664062c11.777344 0 21.335938-9.558594 21.335938-21.335938 0-11.773437-9.558594-21.332031-21.335938-21.332031zm0 0" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="form-group createPost-form-group">
                  <label>Description</label>
                  <textarea
                    className="form-control"
                    placeholder="Enter your description"
                    name="description"
                    value={values.description}
                    onChange={formik.handleChange}
                  />
                  {error.description && touched.description && (
                    <p className="errors">{error.description}</p>
                  )}
                </div>
              </div>
              <div className="col-6 upload-img-wrapper">
                <div className="img-display">
                  <img
                    src={
                      previewImage === null
                        ? uploadImage
                        : URL.createObjectURL(previewImage)
                    }
                    alt="preview"
                    style={{ height: "250px" }}
                  />
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
                    onChange={(event) => handleImgChange(event)}
                  />
                </label>
                <div className="img-display-group row mt-5">
                  <img
                    style={{ cursor: "pointer" }}
                    className="col-4"
                    src={
                      image.first !== null
                        ? URL.createObjectURL(image?.first)
                        : uploadImage
                    }
                    alt="first"
                    onClick={() => {
                      if (image.first !== null) {
                        setPreviewImage(image?.first);
                      }
                    }}
                  ></img>
                  <img
                    style={{ cursor: "pointer" }}
                    className="col-4"
                    src={
                      image.second !== null
                        ? URL.createObjectURL(image?.second)
                        : uploadImage
                    }
                    onClick={() => {
                      if (image.second !== null) {
                        setPreviewImage(image?.second);
                      }
                    }}
                    alt="second"
                  ></img>
                  <img
                    style={{ cursor: "pointer" }}
                    className="col-4"
                    src={
                      image.third !== null
                        ? URL.createObjectURL(image?.third)
                        : uploadImage
                    }
                    onClick={() => {
                      if (image.third !== null) {
                        setPreviewImage(image?.third);
                      }
                    }}
                    alt="third"
                  ></img>
                </div>
              </div>
              <button className="btn-create" type="submit">
                CREATE
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
