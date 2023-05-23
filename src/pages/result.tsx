import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { v1 } from 'uuid';
import { Helmet } from 'react-helmet';

import { googleApiData } from '../api/googleApi';

import { Footer } from '../components/footer';
import { ResultHeader } from '../components/result-header';
import { ResultItem } from '../components/result-item';
import { Pagination } from '../components/pagination';
import { ResultImageItem } from '../components/result-image-item';
import { NotFound } from '../components/not-found';

import { GoogleApiDataType } from '../common/types';

interface ResultPageProps {}

export const ResultPage: FC<ResultPageProps> = () => {
  const { value } = useParams();

  const [data, setData] = useState<GoogleApiDataType | null>(null);
  console.log("🚀 ~ file: result.tsx:23 ~ data:", data)
  const [startIndex, setStartIndex] = useState<number>(1);
  const [activeLink, setActiveLink] = useState<string>('Все');

  useEffect(() => {
    fetchData();
    window.scrollTo(0, 0);
  }, [value, startIndex, activeLink]);

  const fetchData = async () => {
    if (!value) {
      return;
    }
    try {
      let result;
      if (activeLink === 'Картинки') {
        result = await googleApiData({
          q: value,
          start: startIndex,
          searchType: 'image',
        });
      } else {
        result = await googleApiData({ q: value, start: startIndex });
      }
      setData(result);
    } catch (err) {
      console.error(err);
    }
  };

  const isImages = activeLink === 'Картинки';

  const formattedTotalResults = data?.searchInformation.formattedTotalResults || 0;
  const searchTime = data?.searchInformation.searchTime || 0;
  const roundedSearchTime = searchTime.toFixed(2);

  const emptyResults =
    activeLink === 'Видео' ||
    activeLink === 'Новости' ||
    activeLink === 'Покупки' ||
    activeLink === 'Ещё' ||
    !data?.items;

  return (
    <>
      <Helmet>
        <meta name="description" content={`Результаты поиска для "${value}"`} />
        <title>Результаты поиска - {value}</title>
      </Helmet>
      <div className="flex flex-col min-h-[100vh]">
        <ResultHeader activeLink={activeLink} setActiveLink={setActiveLink} />
        <main className="grow p-[.75rem] pb-0 md:ml-36 md:pr-5 ">
          {!emptyResults && (
            <div className="mb-1">
              Результатов: {formattedTotalResults} ({roundedSearchTime} сек.)
            </div>
          )}

          {!emptyResults ? (
            !isImages ? (
              data?.items?.map((item) => <ResultItem key={v1()} {...item} />)
            ) : (
              <div className="flex justify-center md:justify-start flex-wrap gap-3 max-w-[56.25rem]">
                {data?.items?.map((item) => (
                  <ResultImageItem key={v1()} {...item} />
                ))}
              </div>
            )
          ) : (
            <NotFound value={value} />
          )}
          {data?.queries?.nextPage && !emptyResults && (
            <Pagination startIndex={startIndex} setStartIndex={setStartIndex} />
          )}
        </main>
        <Footer />
      </div>
    </>
  );
};
