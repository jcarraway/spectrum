// @flow
import React from 'react';
import { connect } from 'react-redux';
import CreateChannelModal from './CreateChannelModal';
import DeleteDoubleCheckModal from './DeleteDoubleCheckModal';
import RepExplainerModal from './RepExplainerModal';
import ChangeChannelModal from './ChangeChannelModal';
import RestoreChannelModal from './RestoreChannelModal';
import ChatInputLoginModal from './ChatInputLoginModal';
import ReportUserModal from './ReportUserModal';
import BanUserModal from './BanUserModal';

const MODAL_COMPONENTS = {
  CREATE_CHANNEL_MODAL: CreateChannelModal,
  DELETE_DOUBLE_CHECK_MODAL: DeleteDoubleCheckModal,
  REP_EXPLAINER_MODAL: RepExplainerModal,
  CHANGE_CHANNEL: ChangeChannelModal,
  RESTORE_CHANNEL_MODAL: RestoreChannelModal,
  CHAT_INPUT_LOGIN_MODAL: ChatInputLoginModal,
  REPORT_USER_MODAL: ReportUserModal,
  BAN_USER_MODAL: BanUserModal,
};

export type ModalTypes = $Keys<typeof MODAL_COMPONENTS>;

/*
  Takes a modalType and modalProps to dynamically return the
  modal component we imported above
*/
const modalRoot = ({ modalType, modalProps }) => {
  if (!modalType) {
    return null;
  }

  const SpecificModal = MODAL_COMPONENTS[modalType];
  return <SpecificModal {...modalProps} />;
};

const mapStateToProps = state => ({
  modalProps: state.modals.modalProps,
  modalType: state.modals.modalType,
});

// $FlowIssue
export default connect(mapStateToProps)(modalRoot);
