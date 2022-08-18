import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { changeError } from '../../app/slices/errorSlice';

export default function AlertError() {
  const error = useSelector((state) => state.error.errorMessage);
  const dispatch = useDispatch();

  return (
    <Alert variant="danger" onClose={() => dispatch(changeError(''))} dismissible>
      <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
      <p>{error}</p>
    </Alert>
  );
}
