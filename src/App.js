import { ThemeProvider } from 'styled-components'
import GlobalStyle from './GlobalStyle'
import { lightTheme } from './components/Themes'
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import Main from './components/Main'
import SkillPage from './components/SkillPage'
import AboutPage from './components/AboutPage'
import BlogPage from './components/BlogPage'
import WorkPage from './components/WorkPage'

function App() {
  return <>
    <GlobalStyle/>
      <ThemeProvider theme={lightTheme}>
        <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/blog" component={BlogPage} />
              <Route exact path="/skill" component={SkillPage} />
              <Route exact path="/work" component={WorkPage} />
            </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </>
}

export default App

