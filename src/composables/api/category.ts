import axios from 'axios';
import { ApiBasePath, Uncategorized } from '@/composables/api/constants';

export const getCategories = async () => {
  try {
    const { data } = await axios.get(
      `${ApiBasePath}categories?sort=name&hide_empty=true&per_page=50`
    );
    return data.filter(({ name }: { name: string }) => name !== Uncategorized);
  } catch (error) {
    return (error as any).message;
  }
};
