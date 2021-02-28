import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';

const useStyles = createUseStyles({
  listItem: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 300,
    display: 'flex',
    alignItems: 'center',
    padding: 10,
  },
  name: {
    marginRight: 'auto',
  },
  number: {
    fontWeight: '500',
    marginRight: 'auto',
  },
  button: {
    backgroundColor: '#fff',
    boxShadow: '1px 1px 0px 0px black',
    border: 'none',
    borderRadius: 3,
    outline: 'none',
    cursor: 'pointer',
    '&:active': {
      color: 'orange',
      boxShadow: '3px 3px 0px 0px orange',
    },
  },
});
const ContactItem = ({ name, number, id, onDelete }) => {
  const s = useStyles();
  return (
    <li className={s.listItem}>
      <p className={s.name}>{name}</p>
      <p className={s.number}>{number}</p>
      <button className={s.button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default ContactItem;
