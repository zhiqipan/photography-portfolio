import React from 'react';

class EditableImageCard extends React.Component {
  constructor(props) {
    super();
    const {
      title = '', subtitle = '', description = '', fileUrl = '',
    } = props;
    this.state = {
      title, subtitle, description, fileUrl,
    };
  }

  onTitleChange = e => this.setState({ title: e.target.value.trim() });
  onSubtitleChange = e => this.setState({ subtitle: e.target.value.trim() });
  onDescriptionChange = e => this.setState({ description: e.target.value.trim() });
  onFileChange = file => this.setState({ file });

  onDiscardClick = () => {
    const { title = '', subtitle = '', description = '' } = this.props;
    this.setState({ title, subtitle, description });
  };

  onSaveClick = () => {
    const {
      title, subtitle, description, file,
    } = this.state;
    const { onSaveClick } = this.props;
    const updates = {
      title, subtitle, description, file,
    };
    if (onSaveClick) onSaveClick(updates);
  };
  onDeleteClick = () => {
    this.setState({ title: '', subtitle: '', description: '' });
    const { onDeleteClick } = this.props;
    if (onDeleteClick) onDeleteClick();
  };

  isDirty = (field) => {
    const propVal = this.props[field] ? this.props[field] : '';
    const stateVal = this.state[field] ? this.state[field] : '';
    return propVal !== stateVal;
  };

  render() {
    const { title, subtitle, description, fileUrl } = this.state;
    const { onImageClick } = this.props;
    return (
      <div className={'image-card'}>
        <div
          className={'image-card__image'}
          style={{ backgroundImage: `url(${fileUrl})` }}
          onClick={() => onImageClick()}
        >
          <button
            className={'button button--floating-top-left button--danger'}
            onClick={this.onDeleteClick}
          />
        </div>
        <input type={'file'} onChange={e => this.onFileChange(e.target.files[0])} />
        <div>
          <input
            className={
              `image-card__title image-card__title--input
              ${this.isDirty('title') ? ' is-dirty' : ''}`
            }
            value={title}
            onChange={this.onTitleChange}
          />
          <input
            className={
              `image-card__subtitle image-card__subtitle--input
              ${this.isDirty('subtitle') ? ' is-dirty' : ''}`
            }
            value={subtitle}
            onChange={this.onSubtitleChange}
          />
          <textarea
            className={
              `image-card__description image-card__description--textarea
              ${this.isDirty('description') ? ' is-dirty' : ''}`
            }
            value={description}
            onChange={this.onDescriptionChange}
          />
          <div className={'image-card__actions'}>
            <button className={'button'} onClick={this.onSaveClick}>Save</button>
            <button className={'button'} onClick={this.onDiscardClick}>Discard</button>
          </div>
        </div>
      </div>
    );
  }
}

export default EditableImageCard;
