import PropTypes from 'prop-types';
import Icons from '../Icons/Icons';
import { selectColor } from '../../helpers/helper';

export default function Links({ link, icon, shadow }) {
  const selectedShadow = selectColor(shadow);

  return (
    <li
      className={`group bg-ctp-base col-span-1
    flex items-center justify-center w-full h-48 
    rounded-xl border border-transparent shadow-sm ${selectedShadow.shadowColor}
    hover:bg-ctp-surface0/50 hover:shadow-xl
    transition-all duration-300 ease-linear cursor-pointer`}
    >
      <a href={link}>{Icons[icon]()}</a>
    </li>
  );
}

Links.propTypes = {
  icon: PropTypes.string.isRequired,
  shadow: PropTypes.string.isRequired,
  link: PropTypes.string,
};
