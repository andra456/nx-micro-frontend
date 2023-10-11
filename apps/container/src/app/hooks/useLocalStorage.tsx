import { useCallback } from 'react';

const useLocalStorage = () => {
  const setItem = (key: string, value: object | string): void => {
    const data = typeof value === 'object' ? JSON.stringify(value) : value;
    const encodeData = data.toString();
    localStorage.setItem(key, encodeData);
  };

  const getItem = useCallback((key: string, defaultData: any): any => {
    const data: any = localStorage.getItem(key);
    if (data) {
      const decodeData = data.toString();
      try {
        return JSON.parse(decodeData);
      } catch {
        return decodeData || defaultData;
      }
    }
    return defaultData;
  }, []);

  const removeItem = useCallback((key: string): void => {
    localStorage.removeItem(key);
  }, []);

  return {
    setItem,
    getItem,
    removeItem,
  };
};

export default useLocalStorage;
