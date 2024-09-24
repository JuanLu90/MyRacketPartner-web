// DEPENDENCIES
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";

// STYLES
import {
  Wrapper,
  SubWrapper,
  ModalBackground,
  Overlay,
  WrapperChildren,
  WrapperButtons,
  WrapperCloseIcon,
  CloseIcon,
  Title,
  CancelButton,
  SendButton,
} from "./BottomSheetModal.styled";

// IMAGES
import closeImg from "images/close.png";

const BottomSheetModal = (props) => {
  const {
    isOpen,
    closeModal,
    children,
    title,
    onSubmit,
    setErrorState,
    setState,
    hiddeButtons,
  } = props;

  const { t } = useTranslation();

  useEffect(() => {
    if (!isOpen) {
      setState?.({});
      setErrorState?.({});
    }
  }, [isOpen, setState, setErrorState]);

  return (
    isOpen && (
      <>
        <Overlay isOpen={isOpen} />
        {createPortal(
          <Wrapper>
            <SubWrapper>
              <ModalBackground isOpen={isOpen}>
                <WrapperCloseIcon onClick={closeModal}>
                  <CloseIcon src={closeImg} alt="" />
                </WrapperCloseIcon>
                {title && <Title> {title} </Title>}
                <WrapperChildren>{children}</WrapperChildren>
                {!hiddeButtons && (
                  <WrapperButtons>
                    {/* <CancelButton onClick={closeModal}> Close </CancelButton> */}
                    <SendButton onClick={onSubmit}>
                      {t("BottomSheetModal.SendButton")}
                    </SendButton>
                  </WrapperButtons>
                )}
              </ModalBackground>
            </SubWrapper>
          </Wrapper>,
          document.body
        )}
      </>
    )
  );
};

export default BottomSheetModal;
