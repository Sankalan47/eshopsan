import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title> {title} </title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome To Eshop",
  description: "Get the best electronics at very cheap price",
  keywords: "electronics, smartphone, dslr, buy electronics, buy cheap",
};

export default Meta;
