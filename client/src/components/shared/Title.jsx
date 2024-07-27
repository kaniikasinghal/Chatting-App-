import React from 'react';
import { Helmet } from 'react-helmet-async';

const Title = ({
    title = "Jai Shree SiyaRam", 
    description="Har Har Mahadev"
}) => {
  return (
    <Helmet>
        <title>{title}</title>
        <meta name="description" content={description}/>
    </Helmet>
  )
}

export default Title;