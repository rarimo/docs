import React from 'react';

export default function OutLink({children, href = '#'}) {
  return (
    <a href={href} target="_blank" rel="nofollow noopener noreferrer">
        {children}
    </a>
  );
}