import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useFetchData = (action, ...args) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(action(...args)).unwrap();
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dispatch, action, ...args]);
};

export default useFetchData;
