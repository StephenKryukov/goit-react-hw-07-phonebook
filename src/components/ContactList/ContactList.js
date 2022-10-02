import ContactListItem from './ContactListItem';
import s from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { useGetContactsApiQuery } from '../../redux/contactsApi';

const ContactList = () => {
  const { data, isLoading } = useGetContactsApiQuery();
  const filter = useSelector(state => state.filter.value);

  const filteredContacts = () => {
    const normalizeFilter = filter.toLowerCase();
    return (
      data &&
      data.filter(contact =>
        contact.name.toLowerCase().includes(normalizeFilter)
      )
    );
  };

  const filterEl = filteredContacts();

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {
        <ul className={s.list}>
          {!isLoading && data && filterEl.length > 0 ? (
            filterEl.map(({ id, name, phone }) => (
              <ContactListItem
                key={id}
                name={name}
                number={phone}
                id={id}
                data={filterEl}
              />
            ))
          ) : (
            <p className={s.text}>The list is empty</p>
          )}
        </ul>
      }
    </>
  );
};

export default ContactList;
