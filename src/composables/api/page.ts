import axios from 'axios';
import { ApiBasePath } from '@/composables/api/constants';

export const getPages = async () => {
  try {
    const { data } = await axios.get(`${ApiBasePath}pages?per_page=10`);
    return data;
  } catch (error) {
    return (error as any).message;
  }
};
