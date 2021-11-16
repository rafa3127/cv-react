import './App.sass'
import PersonalInfo from "./components/PersonalInfo"
import data from "./data"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Sections from './components/Sections'
import Languages from './components/Languages'
import Skills from './components/Skills'
import PageTitle from './PageTitle'

library.add(fab, fas,far)

const {
        img,
        name,
        professions,
        profile,
        email,
        phone,
        linksSN,
        cvLink,
        sections,
        languages,
        groups
      } = data
function App() {
  return (
    <div className="App">
      {/* <PageTitle pageTitle = "Rafael Correa - CV" /> */}
      <PersonalInfo 
        img={img} 
        name={name} 
        professions={professions}
        profile={profile}
        email={email}
        phone={phone}
        linksSN={linksSN}
        cvLink={cvLink}
      />
      <div>
        <Sections sections = {sections}/>
        <Languages languages={languages}/>
        <Skills groups = {groups}/>
      </div>
    </div>

  );
}

export default App;
