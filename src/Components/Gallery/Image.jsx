// // Image.js
// import React, { useEffect, useRef, useState } from "react";

// const Image = ({ src, alt,images,setImages, index, rowspan, colspan,onDragStart  }) => {

//   const [listImage, setListImage] = useState(images); 

  
//   useEffect(() => {
//     setListImage(images);
// }, [setListImage, images])
  
//   const [dragging, setDragging] = useState(false);


//   const dragItem = useRef();
//   const dragNode = useRef();

//   const handleDragStart = (e, params) => {
//     dragItem.current = params;
//     dragNode.current = e.target;
   
//     dragNode.current.addEventListener('dragend', handleDragEnd);
//     setTimeout(() => {
//       setDragging(true);
//     }, 0);
//   }

//   // const handleDragEnter = (e, params) => {
//   //   console.log('entering Drag...', params);
//   // }

//   const handleDragOver = (e) => {
//     e.preventDefault(); // Necessary to allow the drop event
//   }
//   const handleDrop = (e, targetImage) => {
//     console.log(e.target);
//     console.log('Entering a drag target', targetImage)
//     console.log(dragItem.current);
//     if (dragItem.current !== e.target) {
     
//       const dragIndex = listImage.findIndex(() =>targetImage === dragItem.current);
//       // console.log(dragIndex)
//       const newList = [...listImage];
//       newList.splice(dragIndex, 1);
//       const targetIndex = listImage.findIndex(() =>e.target  === targetImage);
//       console.log(targetIndex)
//       newList.splice(targetIndex, 0, dragItem.current);
    
       
//     // Update the state with the new list order
//     setListImage(newList);

//   }
// }

//   const handleDragEnd = (e, params) => {
//     setDragging(false);
//     dragItem.current = null;
//     dragNode.current.removeEventListener('dragend', handleDragEnd);
//     dragNode.current = null;
//   }

//   const handleDrag = (e) => {
//     if (dragging) {
//       // Update the position of the image with cursor coordinates
      
//     }
//   };

//   return (
//     <div
//       onDragOver={(e) => handleDragOver(e)}
//       onDrop={(e) => handleDrop(e, src,dragItem)}
//       // style={dragging ? { backgroundColor: 'black' } : {}}
//       className="image-container border" draggable
//       onDragStart={(e) => handleDragStart(e, { src })}
//       onDrag={(e) => handleDrag(e)}
    

//     >
//       <img
       
//         src={src}
//         alt={alt}
//       />
//     </div>
//   );
// };

// export default Image;
