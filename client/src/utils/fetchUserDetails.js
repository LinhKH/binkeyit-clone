import Axios from "./Axios";
import SummaryApi from "../common/SummaryApi";
// import AxiosError from "./AxiosToastError";

const fetchUserDetails = async () => {
  try {
    const response = await Axios({
      ...SummaryApi.userDetails,
    });
    return response.data;
  } catch (error) {
    // AxiosError(error);
    console.log(error);
  }
};

export default fetchUserDetails;
