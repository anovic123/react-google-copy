import { FC } from 'react';
import { useParams } from 'react-router-dom';

import { Footer } from '../components/footer';
import { ResultHeader } from '../components/result-header';
import { SearchInput } from '../components/search-input';

interface ResultPageProps {}

export const ResultPage: FC<ResultPageProps> = ({}) => {
  const { query } = useParams();
  console.log('🚀 ~ file: result.tsx:10 ~ query:', query);

  return (
    <div className="flex flex-col min-h-[100vh]">
      <ResultHeader />
      <main className="grow p-[.75rem] pb-0 md:pr-5 md:pl-20"></main>
      <Footer />
    </div>
  );
};
