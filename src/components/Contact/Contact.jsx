import { FaRegUser } from 'react-icons/fa';
import { BsTelephoneOutbound } from 'react-icons/bs';
import css from './Contact.module.css';

export default function Contact({ data: { name, number, id }, onDelete }) {
  return (
    <div className={css.card}>
      <FaRegUser className={css.nameIcon} />
      <p className={css.name}>{name}</p>
      <BsTelephoneOutbound className={css.phoneIcon} />
      <p className={css.phone}>{number}</p>
      <button className={css.button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
