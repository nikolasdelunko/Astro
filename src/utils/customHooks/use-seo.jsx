import React from "react";
import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

const UseSeo = ({
  lang = "en",
  title,
  description = "page description",
  keywords = "Storybooks, Anime portrais, AI Avatars, Blog, Order tracking",
}) => {
  return (
    <Helmet>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

UseSeo.propTypes = {
  lang: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
};

export default UseSeo;
