import { Badge, MessaggiDatePicker } from '../../';
import { useState } from 'react';

const Items = () => (
  <div>
    <h1 style={{ margin: '50px 0' }}>Application Badges</h1>
    <div style={{ margin: '40px 0' }} className="d-flex justify-content-between">
      <Badge text="add" withDot color="pink" />
      <Badge text="chevron" withDot color="red" />
      <Badge text="google" withDot color="blue" />
      <Badge text="horn" withDot color="green" />
      <Badge text="linkedin" withDot color="orange" />
      <Badge text="plus-circle" withDot />
    </div>
    <div style={{ margin: '40px 0' }} className="d-flex justify-content-between">
      <Badge text="add" color="pink" />
      <Badge text="chevron" color="red" />
      <Badge text="google" color="blue" />
      <Badge text="horn" color="green" />
      <Badge text="linkedin" color="orange" />
      <Badge text="plus-circle" />
    </div>
    <div style={{ margin: '40px 0' }} className="d-flex justify-content-between">
      <Badge text="add" color="pink" stroke />
      <Badge text="chevron" color="red" stroke />
      <Badge text="google" color="blue" stroke />
      <Badge text="horn" color="green" stroke />
      <Badge text="linkedin" color="orange" stroke />
      <Badge text="plus-circle" stroke />
    </div>
  </div>
);

export default Items;
