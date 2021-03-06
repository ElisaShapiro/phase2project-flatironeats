import { useState } from 'react'

function NewFoodForm({ addNewFood }){
   const [ formData, setFormData ] = useState ({
     name: "",
     image: "",
     price: "",
     description: "",
     rating: 1,
     review: [],
     category: ""
   })

   function manageFormData(e) {
     let key = e.target.name
     let value = e.target.value

     setFormData({
       ...formData,
       [key]: value
     })
   }

   function handleSubmit (e) {
       e.preventDefault()
       addNewFood(formData)
       setFormData({
        name: "",
        image: "",
        price: "",
        description: "",
        rating: 1,
        review: [],
        category: ""
      })
   }

    return(
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-25">
              <label htmlFor="name">Name of Food </label>
            </div>
            <div className="col-75">
              <input onChange={manageFormData} type="text" name="name" 
                value={formData.name} placeholder="name" /><br />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="image">Image URL :</label>
            </div>
            <div className="col-75">
              <input onChange={manageFormData} type="text" name="image" 
                value={formData.image} placeholder="add image URL" /><br />
            </div>
          </div>
          <div className="row">
            <div className="col-25">  
              <label htmlFor="price">Price : </label>
            </div>
            <div className="col-75">
              <input onChange={manageFormData} type="text" name="price" 
                value={formData.price} placeholder="price" /><br />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label>Category : </label>
            </div>
            <div className="col-75">
              <select name="category" onChange={manageFormData}>
                <option>Choose Food Category</option>
                <option value="Dessert">Dessert</option>
                <option value="Italian">Italian</option>
                <option value="Korean">Korean</option>
                <option value="Potato">Potato</option>
                <option value="Thai">Thai</option>
                <option value="Vietnamese">Vietnamese</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="description">Description : </label>
            </div>
            <div className="col-75">
              <textarea onChange={manageFormData} type="textarea" name="description"
                value={formData.description} placeholder="food description here..." /><br />
            </div>
          </div>
          <div className="row">
            <button type='submit' className="new-food-button">Add New Food</button>
          </div>
        </form>
      </div>
    )
}

export default NewFoodForm;
