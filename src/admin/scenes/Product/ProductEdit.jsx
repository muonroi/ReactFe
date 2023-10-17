import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { productApi } from "../../../Api/productApi";
import { validateProduct } from "../../helper/validate";
import FileUpload from "../../components/Upload";
import AppUrl from "../../../Api/AppUrl";
import CategorySelect from "../../components/CategorySelect";
import { useParams } from "react-router-dom";

export default function AdminProductEdit(props) {
  const [data, setData] = useState({
    id: -1,
    productName: "",
    description: "",
    detail: "",
    category: "",
    price: "",
    image: [],
  });

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  var myViewImage =
    images.length === 0
      ? 'no image'
      : images.map((img) => (
        <div key={img.id}>
          <img
            src={AppUrl.ApiURL + img.url}
            alt={`hinh ${img.name}`}
            name={img.id}
            style={{ width: '250px', height: '250px' }}
          />
          <button
            className="btn"
            onClick={() => handleRemove(img.id)}
          >
            Remove
          </button>
        </div>
      ));
  const addImage = (id, url) => {
    setData({
      ...data,
      image: [...data.image, id],
    });
    setImages([...images, { id: id, url: url }]);
  };

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeCategory = (name, value) => {
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    var err = validateProduct(data);
    if (err) {
      const editProduct = async (data) => {
        try {
          const postData = {
            data: data,
          };

          const response = await productApi.update(data.id, postData);
          if (response.status === 200) {
            toast.success("Thành công");
            document.getElementById("createProduct").reset();
            setData({});
          }
        } catch (error) {
          console.log("Có lỗi: " + error);
        }
      };

      editProduct(data);
    } else {
      toast.error(err);
      return false;
    }
  };

  const handleRemove = (idToRemove) => {
    setData((prevData) => ({
      ...prevData,
      image: prevData.image.filter((img) => img.id !== idToRemove),
    }));

    setImages((prevImages) => prevImages.filter((img) => img.id !== idToRemove));
  };

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async (productId) => {
      try {
        const params = {
          populate: '*',
        };

        const response = await productApi.get(productId, params);
        const oldProduct = response.data.data;
        setData({
          id: oldProduct.id,
          productName: oldProduct.attributes.productName,
          description: oldProduct.attributes.description,
          detail: oldProduct.attributes.detail || "",
          category: oldProduct.attributes.category.data.id,
          price: oldProduct.attributes.price,
          image: oldProduct.attributes.image.data.map((img) => img.id),
        });
        const oldImages = oldProduct.attributes.image.data.map((img) => ({
          id: img.id,
          url: img.attributes.url,
        }));
        setImages([...oldImages]);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(id);
  }, [id]);
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
        theme="colored"
      />
      <div className="row">
        <div className="col-7">
          <form>
            <div className="form-group row">
              <label htmlFor="productName" className="col-4 col-form-label">
                Product name
              </label>
              <div className="col-8">
                <input
                  id="productName"
                  name="productName"
                  type="text"
                  className="form-control"
                  required="required"
                  onChange={handleChange}
                  value={data.productName}
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="textarea" className="col-4 col-form-label">
                Description
              </label>
              <div className="col-8">
                <textarea
                  id="textarea"
                  name="description"
                  cols={40}
                  rows={5}
                  className="form-control"
                  defaultValue={""}
                  onChange={handleChange}
                  value={data.description}
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="textarea" className="col-4 col-form-label">
                Detail
              </label>
              <div className="col-8">
                <textarea
                  id="textarea"
                  name="detail"
                  cols={40}
                  rows={5}
                  className="form-control"
                  defaultValue={""}
                  onChange={handleChange}
                  value={data.detail}
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="select" className="col-4 col-form-label">
                Category
              </label>
              <div className="col-8">
                <CategorySelect
                  onChange={handleChangeCategory}
                  oldValue={data.category}
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="text" className="col-4 col-form-label">
                Price
              </label>
              <div className="col-8">
                <input
                  id="text"
                  name="price"
                  type="text"
                  className="form-control"
                  required="required"
                  onChange={handleChange}
                  value={data.price}
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="offset-4 col-8">
                <button
                  name="submit"
                  type="submit"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-5">
          <FileUpload addImage={addImage} />
          <div id="uploadImgs">{myViewImage}</div>
        </div>
      </div>
    </>
  );
}
