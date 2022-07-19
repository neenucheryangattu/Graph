import { Getcities, Getmeasurements } from "../../../Infrastructure/Chart";
const actions = {
    setisLoading:
      (isLoading) =>
      ({ setState }) => {
        setState({ isLoading });
      },
      setCities:
      (cities) =>
      ({ setState }) => {
        setState({ cities });
      },
      setmeasurements:
      (measurements) =>
      ({ setState }) => {
        setState({ measurements });
      },
      setparameter:
      (parameter) =>
      ({ setState }) => {
        setState({ parameter });
      },
      getcity:
      (data) =>
      async ({ setState, dispatch }) => {
        dispatch(actions.setisLoading(true));
        try {
          const res = await Getcities();
          setState({ cities: res.data.results });
        } catch (err) {
          dispatch(actions.setisLoading(true));
        } finally {
          dispatch(actions.setisLoading(false));
        }
  
      },
      getmeasurements:
      (data) =>
      async ({ setState, dispatch }) => {
        dispatch(actions.setisLoading(true));
        try {
          const res = await  Getmeasurements();
          setState({measurements : res.data });
          dispatch(actions.parameter(res.data.results));
        } catch (err) {
          dispatch(actions.setisLoading(true));
        } finally {
          dispatch(actions.setisLoading(false));
        }
  
      },
  
    }
    export default actions;  