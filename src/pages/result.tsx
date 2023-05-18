import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { v1 } from 'uuid';

import { googleApiData } from '../api/googleApi';

import { Footer } from '../components/footer';
import { ResultHeader } from '../components/result-header';
import { SearchInput } from '../components/search-input';

import { GoogleApiDataType } from '../common/types';
import { ResultItem } from '../components/result-item';

interface ResultPageProps {}

export const ResultPage: FC<ResultPageProps> = ({}) => {
  const { value } = useParams();
  const [data, setData] = useState<GoogleApiDataType | null>(null);
  console.log('🚀 ~ file: result.tsx:21 ~ data:', data);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    if (!value) {
      return;
    }

    try {
      const result = await googleApiData({ q: value, start: 1 });
      setData(result);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col min-h-[100vh]">
      <ResultHeader />
      <main className="grow p-[.75rem] pb-0 md:ml-36 md:pr-5 ">
        <div className="mb-1">
          Результатов: {data?.searchInformation.totalResults} (
          {data?.searchInformation.searchTime || 0} сек.)
        </div>
        {data?.items.map((item) => (
          <ResultItem key={v1()} {...item} />
        ))}
      </main>
      <Footer />
    </div>
  );
};
