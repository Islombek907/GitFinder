import useStore from '../store/store';

const UserProfile = () => {
  const { user, error, active, setActive } = useStore();
  const filters = ['ИМЯ', 'ЗВЕЗДЫ', 'ДАТА'];

  if (error) {
    return (
      <section className="user-profile">
        <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>
      </section>
    );
  }

  if (!user) {
    return null; // Ничего не отображаем, пока данные не загружены
  }

  return (
    <>
      <section className="user-profile">
        <div className="info-link">
          <img src={user.avatar_url} alt="" />
          <a href={user.html_url}>ПОСЕТИТЬ</a>
        </div>
        <div className="user-info">
          <p>{user.login}</p>
          <p>Репозиториев: <span>{user.public_repos}</span></p>
          <p>Создан: <span>{new Date(user.created_at).toISOString().split('T')[0]}</span></p>
          <p>Подписчиков: <span>{user.followers}</span></p>
          <p>Подписок: <span>{user.following}</span></p>
        </div>
      </section>
      <section className="sort">
        <h2>Сортировка</h2>
        <div className="filter-container">
          {filters.map((type) => (
            <button
              key={type}
              className={`filter-button ${active === type ? 'active' : ''}`}
              onClick={() => setActive(type)}
            >
              {type}
            </button>
          ))}
        </div>
      </section>
    </>
  );
};

export default UserProfile;