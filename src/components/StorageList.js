import strings from '../assets/strings-en';

export default function StorageList() {
  const TK_CLOSET_FOUND = false;

  return TK_CLOSET_FOUND ? (
    <section className="storage">
      <h2>[ {strings.storage_closet} ]</h2>
    </section>
  ) : (
    ''
  );
}
