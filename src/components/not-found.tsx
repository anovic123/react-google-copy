import { FC } from 'react';

import NOT_FOUND from '../assets/not-found.svg';

interface NotFoundProps {
  value?: string;
}

export const NotFound: FC<NotFoundProps> = ({ value = 'empty value' }) => {
  return (
    <div className="mb-10 font-medium text-sm">
      <p className="my-3">
        Страницы, содержащие все слова запроса, не найдены. <br />
      </p>
      <p className="my-3">
        По запросу <strong>{value}</strong> ничего не найдено. <br />
      </p>

      <p className="my-1">Рекомендации:</p>
      <ul className="list-disc">
        <li>Убедитесь, что все слова написаны без ошибок.</li>
        <li>Попробуйте использовать другие ключевые слова.</li>
        <li>Попробуйте использовать более популярные ключевые слова.</li>
      </ul>
      <img src={NOT_FOUND} alt="Not Found" />
    </div>
  );
};
