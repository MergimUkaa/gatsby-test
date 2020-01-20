import React from "react"

const Product = ({ pageContext }) => (
  <div>
    <h1>{pageContext.title}</h1>
    <img
      src={pageContext.image}
      alt={pageContext.title}
      style={{ float: "left", marginRight: "1rem", width: 150 }}
    />
    <p>{pageContext.price}</p>
<<<<<<< HEAD
    <h2>O mergim u ndryshu edhe live, test me Teute loqken, e du shumeeeee</h2>
=======
    <h2>O mergim u ndryshu edhe live, edhe me Teuten {'<3'}</h2>
>>>>>>> 346c12dfe83643258ffcd4b7e8713e8911095916
    <h2>Posted by {pageContext.postedBy}</h2>
    <h2>Date of post:  {pageContext.date}</h2>
    <div dangerouslySetInnerHTML={{ __html: pageContext.description }} />
  </div>
)

export default Product