import axios from 'axios';
import { GoogleApiDataType } from '../common/types';
import { config } from "./../core/config";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";

const params = {
  key: config.apiKey,
  cx: config.apiCx
}

interface GoogleApiDataPayload {
  q: string;
  start: number;
  searchType?: string
}

export const googleApiData = async ({ q, start, searchType  }: GoogleApiDataPayload): Promise<GoogleApiDataType> => {
  const { data } = await axios.get(BASE_URL, {
    params: { ...params, ...{ q, start, searchType } }
  })

  return data
}