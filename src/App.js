import React, { useState, useRef } from "react";
import "./App.css";
import image1 from "./Images/image-1.webp";
import image2 from "./Images/image-2.webp";
import image3 from "./Images/image-3.webp";
import image4 from "./Images/image-4.webp";
import image5 from "./Images/image-5.webp";
import image6 from "./Images/image-6.webp";
import image7 from "./Images/image-7.webp";
import image8 from "./Images/image-8.webp";
import image9 from "./Images/image-9.webp";
import image10 from "./Images/image-10.jpeg";
import image11 from "./Images/image-11.jpeg";

const App = () => {
  const [listImage, setListImage] = useState([
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
  ]);
  const dragItem = useRef(null);
  const [selectedItems, setSelectedItems] = useState([]);

  
  // adding upload image
  const fileInputRef = useRef(null);

  const handleImageInputClick = () => {
    fileInputRef.current.click();
  };

  const handleImageUpload = (file) => {
    if (file) {
      const newList = [...listImage, URL.createObjectURL(file)];
      setListImage(newList);
    }
  };


  const handleDragStart = (e, item) => {
    dragItem.current = item;
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", item);
    
  };
  

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetImage) => {
    e.preventDefault();
    // const droppedItem = e.dataTransfer.getData('text/plain');
    const dragIndex = listImage.indexOf(dragItem.current);
    const dropIndex = listImage.indexOf(targetImage);

    if (dragIndex !== -1 && dropIndex !== -1) {
      const newList = [...listImage];
      newList[dragIndex] = listImage[dropIndex];
      newList[dropIndex] = dragItem.current;
      setListImage(newList);
    }
  };


  // select button function
  const toggleSelection = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(
        selectedItems.filter((selectedItem) => selectedItem !== item)
      );
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };


// delete Image

  const deleteSelectedImages = () => {
    const newList = listImage.filter((image) => !selectedItems.includes(image));
    setListImage(newList);
    setSelectedItems([]);
  };





  return (
    <div>
      {/* <h1>Drag and Drop Images</h1> */}

      <div
        style={{
          margin: "auto",
          width: "80%",
          marginTop: "50px",
          marginBottom: "20px",
          
        }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
      >
        <div className="flex justify-between col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-5">
          <p className="text-bold"> {selectedItems.length} Files selected</p>

          <button
            className="text-bold text-red-800"
            onClick={deleteSelectedImages}
          >
            Delete Files
          </button>
        </div>
        {listImage.map((image, index) => {
          const isSelected = selectedItems.includes(image);

          return (
            <div
              className={`image-container border ${
                dragItem ? "dragging-image" : ""
              }`}
              key={index}
              onDragStart={(e) => handleDragStart(e, image)}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, image)}
              draggable
              style={{
                gridColumn: index < 1 ? "span 2" : "auto",
                gridRow: index < 1 ? "span 2" : "auto",
                position: "relative",
                width: "100%",
                
              }}
            >
              <button
                className={`selection-button ${isSelected ? "selected" : ""}`}
                onClick={() => toggleSelection(image)}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  margin: "10px",
                  zIndex: 1,
                }}
              >
                {isSelected ? (
                  <i className="fas fa-check-circle"></i>
                ) : (
                  <i className="far fa-circle"></i>
                )}
              </button>
                <div style={{ width: "100%" }} className="image-overlay border">
                <img style={{ width: "100%" }} src={image} alt="" />
              </div>
            </div>
          );
        })}



{/* add image */}

        <div className="image-upload-box flex flex-col content-center	items-center">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageUpload(e.target.files[0])}
            style={{ display: "none" }}
            ref={fileInputRef}
          />

          <button
            className="flex flex-col items-center"
            onClick={handleImageInputClick}
          >
            <i className="fas fa-image text-4xl"></i>
            Add Image
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
