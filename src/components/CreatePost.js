import { useState } from "react";

import { firestore } from "../firebase";

import { useFormInput } from "../hooks";


function CreatePost() {
  const [title,setTitle]=useState("");
  const [subTitle,setSubTitle]=useState("");
  const [content,setContent]=useState("");

  function handleOnSubmit(e){
    e.preventDefault();
    // console.log(title)

    // console.log(subTitle)
    // console.log(Content)

    // firestore.collection('posts').add({
    //   title,
    //   subTitle,
    //   Content,
    //   createdAt:new Date()
    // })


    firestore
      .collection('posts')
      .add({
        title,
        subTitle,
        content,
        createdAt: new Date(), // timestamp
      });
  }
    return (
      <div className="create-post">
         <h1>
            Create Post
          </h1>
       <form onSubmit={handleOnSubmit}>
        <div className="form-field">
          <label>Title</label>
          <input value={title} onChange={(e)=>setTitle(e.target.value)}/>
          {/* <input {...title}/> */}
         
        </div>
        <div className="form-field">
          <label>Sub Title</label>
          <input value={subTitle} onChange={(e)=>setSubTitle(e.target.value)}/>
          {/* <input {...subTitle}/> */}
         
        </div>
        <div className="form-field">
          <label>Content</label>
          <textarea value={content} onChange={(e)=>setContent(e.target.value)}></textarea>
          {/* <textarea {...content}></textarea> */}
         
        </div>
        <button className="create-post-btn">Create Post</button>
       </form>
      
      </div>
    );
  }
  
  export default CreatePost;











//WITHOUT USING SPREAD OPERATOR



//   // import { useState } from "react";

// import { firestore } from "../firebase";

// import { useFormInput } from "../hooks";


// function CreatePost() {
//   const title=useFormInput("");
//   const subTitle=useFormInput("");
//   const content=useFormInput("");

//   function handleOnSubmit(e){
//     e.preventDefault();
//     // console.log(title)

//     // console.log(subTitle)
//     // console.log(Content)

//     // firestore.collection('posts').add({
//     //   title,
//     //   subTitle,
//     //   Content,
//     //   createdAt:new Date()
//     // })


//     firestore
//       .collection('posts')
//       .add({
//         title:title.value,
//         subTitle:subTitle.value,
//         content:content.value,
//         createdAt: new Date(), // timestamp
//       });
//   }
//     return (
//       <div className="create-post">
//          <h1>
//             Create Post
//           </h1>
//        <form onSubmit={handleOnSubmit}>
//         <div className="form-field">
//           <label>Title</label>
//           {/* <input value={title} onChange={(e)=>setTitle(e.target.value)}/> */}
//           <input {...title}/>
         
//         </div>
//         <div className="form-field">
//           <label>Sub Title</label>
//           {/* <input value={subTitle} onChange={(e)=>setSubTitle(e.target.value)}/> */}
//           <input {...subTitle}/>
         
//         </div>
//         <div className="form-field">
//           <label>Content</label>
//           {/* <textarea value={content} onChange={(e)=>setContent(e.target.value)}></textarea> */}
//           <textarea {...content}></textarea>
         
//         </div>
//         <button className="create-post-btn">Create Post</button>
//        </form>
      
//       </div>
//     );
//   }
  
//   export default CreatePost;