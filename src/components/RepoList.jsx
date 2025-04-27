import useStore from '../store/store';
import Loading from './Loading/Loading.jsx';

const RepoList = () => {
  const { repos, isLoading, active } = useStore();

  if (isLoading) {
    return <Loading />;
  }

  if (!repos.length) {
    return null;
  }

  const sortedRepos = [...repos].sort((a, b) => {
    if (active === 'ИМЯ') {
      // Сортировка по имени (A-Z, алфавитный порядок)
      return a.name.localeCompare(b.name);
    }
    if (active === 'ЗВЕЗДЫ') {
      // Сортировка по количеству звёзд (по убыванию: больше звёзд → меньше звёзд)
      return b.stargazers_count - a.stargazers_count;
    }
    if (active === 'ДАТА') {
      // Сортировка по дате создания (по убыванию: новые → старые)
      return new Date(b.created_at) - new Date(a.created_at);
    }
    return 0;
  });

  return (
    <div className="repo">
      {sortedRepos.map((repo) => (
        <div className="repo-item" key={repo.id}>
          <div className="repo-info">
            <h3>{repo.name}</h3>
            <p>Кол-во звёзд: {repo.stargazers_count}</p>
            <p>Дата добавления: {new Date(repo.created_at).toISOString().split('T')[0]}</p>
          </div>
          <div className="visit">
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              Посетить
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RepoList;