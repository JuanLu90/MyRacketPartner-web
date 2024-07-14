// import React from "react";
// import Header from "../Header/Header";
// import { Wrapper, WrapperBody, Main, GlobalStyle, BottomBlock } from "./Layout.styled";
import { Wrapper } from "./Layout.styled";
// import Footer from "../Footer/Footer";
// import Loading from "../Generic/Loading/Loading";
// import { useSelector } from "react-redux";
// import ToastAlert from "../Generic/ToastAlert/ToastAlert";

// const Layout = (props) => {
//   const isLoading = useSelector((state) => state.loading);
//   const { toast } = useSelector((state) => state.alert);

//   return (
//     <Wrapper>
//             {toast?.message && <ToastAlert toastObj={toast} />}

//       <GlobalStyle loading={isLoading} />
//       <WrapperBody>
//         <Header />
//         <Main>
//           {props.children}
//           <BottomBlock />
//         </Main>
//         <Footer />
//       </WrapperBody>
//       {isLoading && <Loading />}
//     </Wrapper>
//   );
// };

// export default Layout;

const Layout = (props) => {
  return (
    <Wrapper>
      <div> {props.children} </div>
    </Wrapper>
  );
};

export default Layout;
