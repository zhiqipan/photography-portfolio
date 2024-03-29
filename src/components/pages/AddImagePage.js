import React from 'react';
import { connect } from 'react-redux';
import { startAddImage } from '../../actions/images';
import EditableImageCard from '../presentational/EditableImageCard';

export const AddImagePage = (props) => {
  return (
    <div className={'content-container content-container--small'}>
      <EditableImageCard
        editable
        onSaveClick={updates => props.startAddImage(updates)}
      />
    </div>
  );
};

export default connect(undefined, { startAddImage })(AddImagePage);
