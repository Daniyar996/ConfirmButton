import React from 'react';
import {Popconfirm} from 'antd';
import {Translation} from "react-i18next";
import Button from 'Button/Button';
import PropTypes from 'prop-types';

export class ConfirmButton extends React.Component {
  render() {
    const {question, onConfirm, onCancel, placement} = this.props;
    const btnProps = {...this.props};
    delete btnProps.onConfirm; // onConfirm вызывает warning в AppButton

    return (
      <Popconfirm
        title={question || <Translation>{t => t('Вы уверены?')}</Translation>}
        onConfirm={onConfirm}
        placement={placement || "left"}
        onCancel={onCancel}
        okText={<Translation>{ t => t("Да")}</Translation>}
        cancelText={<Translation>{ t => t("Нет")}</Translation>}>
        <Button {...btnProps}/>
      </Popconfirm>
    );
  }
}

ConfirmButton.propTypes = {
  type: PropTypes.oneOf(['primary', 'dashed', 'danger', 'default', 'link']),
  size: PropTypes.oneOf(['large', 'default', 'small']),
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  outline: PropTypes.bool,
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
  question: PropTypes.string,
  children: PropTypes.any,
};

ConfirmButton.defaultProps = {
  type: 'danger',
  size: 'default',
};
