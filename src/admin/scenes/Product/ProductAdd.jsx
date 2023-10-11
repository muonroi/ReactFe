import { ToastContainer, toast } from "react-toastify";
import React, { useEffect, useState } from "react";
import { productApi } from "../../../Api/productApi";
import { validateProduct } from "../../helper/validate";
import FileUpload from "../../components/Upload";
import AppUrl from "../../../Api/AppUrl";
import CategorySelect from "../../components/CategorySelect";

export default function AdminProductAdd() {
    const [data, setData] = useState({
        productName: '',
        description: '',
        detail:'',
        category: '',
        price: '',
        image: [],
      });
      const [images,setImages] = useState([]);
const addImage = (id,url)=>{
    setData({
        ...data,
        "image":
        [
            ...data.image,
            id
        ]
    });
    setImages([
        ...images,{
            id:id,
            url:url
        }
       
    ])
}
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
      const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]:event.target.value
        })
      }
      const handleChangeCategory = (name,value) => {
        setData({
            ...data,
            [name]:value
        })
      }
      const handleSubmit = async (e) => {
        e.preventDefault();
      
        var err = validateProduct(data);
      
        if (err) {
          const addProduct = async (data) => {
            try {
              const postData = {
                "data":data
              }
              const response = await productApi.add(postData);
              console.log(response);
      
              if (response.status === 200) {
                toast.success('Thành công');
                document.getElementById('createProduct').reset();
                setData({});
              }
            } catch (error) {
              return false;            }
          };
      
          addProduct(data);
        } else {
          toast.error(err);
          return false;
        }
      };
      const handleRemove = (e) => {
        setData({
          ...data,
          'image': data.image.filter((img) => img.id !== e),
        });
      
        setImages(images.filter((img) => img.id !== e));
      };
      
    return(
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
  <div className ='col-7'>
  <form>
  <div className="form-group row">
    <label htmlFor className="col-4 col-form-label">Product name</label> 
    <div className="col-8">
      <input id name ='productName' type="text" className="form-control" required="required" onChange={handleChange}/>
    </div>
  </div>
  <div className="form-group row">
    <label htmlFor="textarea" className="col-4 col-form-label">Description</label> 
    <div className="col-8">
      <textarea id="textarea" name="description" cols={40} rows={5} className="form-control" defaultValue={""} onChange={handleChange}/>
    </div>
  </div>
  <div className="form-group row">
    <label htmlFor="textarea" className="col-4 col-form-label">Detail</label> 
    <div className="col-8">
      <textarea id="textarea" name="detail" cols={40} rows={5} className="form-control" defaultValue={""} onChange={handleChange}/>
    </div>
  </div>
  <div className="form-group row">
    <label htmlFor="select" className="col-4 col-form-label">Category</label> 
    <div className="col-8">
      <CategorySelect onChange={handleChangeCategory}/>
    </div>
  </div>
  <div className="form-group row">
    <label htmlFor="text" className="col-4 col-form-label">Price</label> 
    <div className="col-8">
      <input id="text" name="price" type="text" className="form-control" required="required" onChange={handleChange}/>
    </div>
  </div> 
  <div className="form-group row">
    <div className="offset-4 col-8">
      <button name="submit" type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
    </div>
  </div>
</form>
  </div>
  <div className ='col-5'>
<FileUpload addImage={addImage}/>
<div id='uploadImgs'>{myViewImage}</div>
  </div>

</div>

    </>);
}