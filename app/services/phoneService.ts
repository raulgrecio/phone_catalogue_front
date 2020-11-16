import {apiClient} from 'app/services/client';
import ApiConfig from 'app/config/api-config';
import {AxiosResponse} from 'axios';
import {ApiResponse, ListPhonesResponse} from 'app/models/api/phone';

const fetchPhones = async ({
  pagination,
}: {
  pagination?: number;
}): Promise<AxiosResponse<ApiResponse<ListPhonesResponse>>> => {
  const page = `${pagination}`;

  try {
    let res = await apiClient.get(ApiConfig.GET_ALL, {
      params: {
        page: page,
      },
    });
    //let data = res.data;
    return res;
  } catch (error) {
    console.log(error.response); // this is the main part. Use the response property from the error object
    return error.response;
  }
};

export {fetchPhones};
