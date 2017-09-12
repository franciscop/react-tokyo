import React, { Component } from 'react';

export default (props) => {
  const liked = () => {
    alert('Liked!')
  };
  return (
    <img onClick={liked} src={props.src} />
  );
};
