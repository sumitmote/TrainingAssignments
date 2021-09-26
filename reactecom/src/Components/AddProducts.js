import React, { useState } from "react";
import { storage, fs } from "../Util/Util";

export const AddProducts = () => {
  const [pname, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const [imageError, setImageError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [uploadError, setUploadError] = useState("");

  const types = ["image/jpg", "image/png", "image/jpeg", "image/PNG"];
  const handleImage = (v) => {
    let selectedFile = v.target.files[0];
    if (selectedFile) {
      if (selectedFile && types.includes(selectedFile.type)) {
        setImage(selectedFile);
        setImageError("");
      } else {
        setImage(null);
        setImageError(
          "Please select a valid image file type (png or jpg) format "
        );
      }
    } else {
      console.log("please select your file");
    }
  };

  const handleAddProd=(e)=>{
    e.preventDefault();
    const uploadTask=storage.ref(`product-images/${image.name}`).put(image);
    uploadTask.on('state_changed',(snapshot)=>{
        const percent = (snapshot.bytesTransferred/snapshot.totalBytes)*100
        console.log(percent);
    },(error)=>setUploadError(error.message),()=>{    
        storage.ref('product-images').child(image.name).getDownloadURL().then(url=>{
            fs.collection('Products').add({
                pname,
                description,
                quantity: Number(quantity),
                price: Number(price),
                url,
            }).then(()=>{
                setSuccessMsg('Product added successfully');
                setName("");
                setDescription("");
                setQuantity("");
                setPrice("");
                document.getElementById("file").value = "";
                setImageError("");
                setUploadError("");
                setTimeout(()=>{	
                    setSuccessMsg('');
                },4000)
            }).catch(error=>setUploadError(error.message));
        })
    })
}

  return (
    <div className="container">
      <br></br>
      <br></br>
      <br></br>

      <h1>Add New Product</h1>
      <hr></hr>
      {successMsg && (
        <React.Fragment>
          <div className="success-msg">{successMsg}</div>
          <br></br>
        </React.Fragment>
      )}

      <form autoComplete="off" className="form-group" onSubmit={handleAddProd}>
        <label>Product Name</label>
        <input
          type="text"
          className="form-control"
          required
          placeholder="Enter Product Name"
          onChange={(v) => setName(v.target.value)}
          value={pname}
        ></input>
        <br></br>
        <label>Product Description</label>
        <textarea
          type="text"
          className="form-control"
          required
          placeholder="Enter Product Description"
          onChange={(v) => setDescription(v.target.value)}
          value={description}
        ></textarea>
        <br></br>
        <label>Product Image</label>
        <input
          type="file"
          id="file"
          className="form-control"
          required
          placeholder="Enter Product Image"
          onChange={handleImage}
        ></input>
        <br></br>
        {imageError && (
          <React.Fragment>
            <br></br>
            <div className="error-msg">{imageError}</div>
          </React.Fragment>
        )}
        <label>Product Quantity</label>
        <input
          type="number"
          className="form-control"
          required
          placeholder="Enter Product Quantity"
          onChange={(v) => setQuantity(v.target.value)}
          value={quantity}
        ></input>
        <br></br>
        <label>Product Price</label>
        <input
          type="number"
          className="form-control"
          required
          placeholder="Enter Product Price"
          onChange={(v) => setPrice(v.target.value)}
          value={price}
        ></input>
        <br></br>
        <br></br>

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button type="submit" className="btn btn-success btn-md">
            {" "}
            Submit
          </button>
        </div>
      </form>
      {uploadError && (
        <React.Fragment>
          <br></br>
          <div className="error-msg">{imageError}</div>
        </React.Fragment>
      )}
    </div>
  );
};
