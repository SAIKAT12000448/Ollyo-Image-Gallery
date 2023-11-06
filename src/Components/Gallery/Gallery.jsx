import React from "react";



import Image from "./Image";



const Gallery = ({images,setImages}) => {
 
 

  return (
    <div className="" style={{ width: '80%', minHeight: '100vh', alignItems: 'center',margin:'auto',marginTop:'20px',marginBottom:"20px" }}>


            
<div  className="grid grid-cols-5 gap-4">

               
        {images.map((image, index) => (
          
          <Image
            key={index}
            src={image}
            images={images}
            alt={`Image ${index + 1}`}
            rowspan={index === 0 ? 2 : 1}
            colspan={index === 0 ? 2 : 1}
            setImages={setImages}
          />
       
        ))}

         

         


    </div>
    </div>
  );
};

export default Gallery;
