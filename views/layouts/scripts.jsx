import React from 'react';

export default function Scripts(props) {
  return <React.Fragment>{props.scripts.map((script) => <script src={script.src} type={script.type || 'text/javascript'} ></script>)}</React.Fragment>
}
