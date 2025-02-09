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
    <h2>O mergim u ndryshu edhe live, test me Teute loqken, e du shumeeeeeeeeee</h2>
    <h2>Posted by {pageContext.postedBy}</h2>
    <h2>Date of post:  {pageContext.date}</h2>
    <div dangerouslySetInnerHTML={{ __html: pageContext.description }} />
  </div>
)

export default Product