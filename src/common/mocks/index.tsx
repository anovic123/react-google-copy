import { GoSearch } from 'react-icons/go';
import { BsImage, BsThreeDotsVertical } from 'react-icons/bs';
import { BiNews } from 'react-icons/bi';
import { RiVideoLine } from 'react-icons/ri';
import { SlTag } from 'react-icons/sl';

export const headerNavigate = [
  { name: 'Все', icon: <GoSearch /> },
  { name: 'Картинки', icon: <BsImage size={14} /> },
  { name: 'Видео', icon: <BiNews /> },
  { name: 'Новости', icon: <RiVideoLine /> },
  { name: 'Покупки', icon: <SlTag size={14} />},
  { name: 'Ещё', icon: <BsThreeDotsVertical /> }
]

export const footerLinks = [
  {
    name: 'Всё о Google',
    link: 'https://about.google/?utm_source=google-UA&utm_medium=referral&utm_campaign=hp-footer&fg=1'
  },
  {
    name: 'Реклама',
    link: 'https://ads.google.com/intl/ru_ua/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1'
  },
  {
    name: 'Для бизнеса',
    link: 'https://www.google.com.ua/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1#?modal_active=none'
  },
  {
    name: 'Как работает Google Поиск',
    link: 'https://www.google.com/search/howsearchworks/?fg=1'
  },
]

export const footerMenu = [
  {
    name: 'Конфиденциальность',
    link: 'https://policies.google.com/privacy?hl=ru-UA&fg=1'
  },
  {
    name: 'Условия',
    link: 'https://policies.google.com/terms?hl=ru-UA&fg=1'
  },  {
    name: 'Настройки',
    link: '#'
  },
]