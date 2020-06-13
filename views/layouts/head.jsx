import React from 'react';

export default function Head(props) {
  return <head><title>{props.title || ''}</title></head>
}
