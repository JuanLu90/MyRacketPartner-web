// REDUX
import { useSelector } from "react-redux";

// COMPONENTS
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Loading from "components/Loading/Loading";
// import ToastAlert from "../Generic/ToastAlert/ToastAlert";

// STYLES
import {
  Wrapper,
  WrapperBody,
  Main,
  BottomBlock,
  GlobalStyle,
} from "./Layout.styled";

// FUNCTION
const Layout = (props) => {
  const isLoading = useSelector((state) => state.loading);
  // const { toast } = useSelector((state) => state.alert);

  return (
    <Wrapper>
      <GlobalStyle loading={isLoading} />
      {/* {toast?.message && <ToastAlert toastObj={toast} />} */}

      <WrapperBody>
        <Header />
        <Main>
          {props.children}
          <BottomBlock />
        </Main>
        <Footer />
      </WrapperBody>
      {isLoading && <Loading />}
    </Wrapper>
  );
};

export default Layout;
