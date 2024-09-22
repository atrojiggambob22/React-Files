import React, { useState } from 'react';

function Panel({ title, message }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <section className='accordion-body accordion-item'>
      {
        isActive ?
          <p>{title} {message} <button onClick={() => setIsActive(false)}>Reset</button></p> :
          <button onClick={() => setIsActive(true)}>Show</button>
      }
    </section>
  );
}

function Accordion() {
  return (
    <>
      <h2>NIIT Institution</h2>
      <Panel title="Semester-1" message="has resumed" />
      <Panel title="Semester-2" message="has resumed" />
      <Panel title="Semester-3" message="has resumed" />
      <Panel title="Semester-4" message="has resumed" />
    </>
  );
}

export default function SharingStateBtwComponents() {
  return <Accordion />;
}