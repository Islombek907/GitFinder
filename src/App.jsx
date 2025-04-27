import Header from "./components/Header"
import RepoList from "./components/RepoList"
import Search from "./components/Search"
import UserProfile from "./components/UserProfile"

const App = () => {
  return (
    <>
      <Header/>
      <Search/>
      <UserProfile/>
      <RepoList/>
    </>
  )
}

export default App