import React from 'react';

const Cases = ({ cases }) => {
  return (
    <div style={{ margin: '100px auto', width: '90%' }}>
      {cases.length > 0 && (
        <ul
          style={{
            width: '100%',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(25%, auto))',
            gap: 20,
            maxWidth: '100%',
            listStyle: 'none',
          }}
        >
          {cases.map((c) => (
            <li key={c.id} style={{ height: 200, position: 'relative' }}>
              <img
                src={c.attributes.imgURL}
                alt={c.attributes.title}
                style={{ width: '100%', height: '100%' }}
              />
              <div style={{ position: 'absolute', bottom: 0, left: 0 }}>
                <h3
                  style={{
                    color: '#fff',
                  }}
                >
                  {c.attributes.title}
                </h3>
                <p
                  style={{
                    color: '#fff',
                  }}
                >
                  {c.attributes.desc}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cases;
