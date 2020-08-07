import { a, div, h, h1, h2, li, ul } from 'react-hyperscript-helpers'
import { Route } from 'react-router-dom'
import { colors } from 'src/utils/colors'
import { personalInfo } from 'src/utils/personal-info'
import { styles as generalStyles } from 'src/utils/styles'


export const HOMEPAGE_URL = '/'

export const Homepage = () => {
  return (div({ style: {...generalStyles.pageContainer, maxWidth: '50rem'} }, [
    h1(['Homepage']),
    div([`Hello and welcome to ${personalInfo.name}'s personal website! Here you can find all sorts of things 
      from my blog, my resume, and various sorts of things for hobbies of mine. This is also designed as
      a bit of a portfolio piece for me, so people can see my code style. (Although I am finding that
      developing as a solo project has very different considerations than a group project.) Please enjoy.`]),
    h2(['Software Engineering']),
    div(['My software engineering philosophy has been influenced by many amazing mentors, and has basically landed on the following ideas: ',
      ul([
        li([`A software engineer's role is to minimize complexity.`]),
        li(['The closer documentation is to code, the more it can be trusted.']),
        li(['Documentation is best used to capture snapshots in time. For example, "On 11/3/20, we decided to use library X for the following reasons..."']),
        li(['Technical debt is an inevitability of software engineering, therefore', ul([
          li(['it must be planned for']),
          li(['it must be continually reduced']),
          li(['it should be considered a form of complexity, which means it is part of a software engineer\'s job to deal with it'])
        ])]),
        li(['Code is most easily approached (for me) and most valuable when it is rooted in a user issue.']),
        li(['Software engineers are a class of user for the software they build. This includes new developers. Therefore issues for the engineers and for ramp up are user issues'])
      ])
    ]),
    div(['For anyone interested in looking at the code for this website, it can be found ',
      a({ style: { color: colors.secondary }, href: 'https://github.com/s-rubenstein/personal-website' }, ['here'])]),
    h2(['About Me']),
    div([`My name is ${personalInfo.name} (${personalInfo.pronouns} pronouns). I am a demisexual, demiromantic, jewish, non-binary,
     and transgender activist and software engineer. I primarily work on full stack web development projects, although currently
     I do much more front end software engineering. In my free time, I play a lot of board games, video games, participate in Live Action
     Role Playing events, play tabletop roleplaying games, and cook. I also tend to attend protests, and spent about half a year phone banking
     for trans rights. Using software engineering to try to move the world towards a more equitable place is my passion.`])
  ]))
}


export const HomepageRoute = homepageProps => {
  return h(Route, { exact: true, path: HOMEPAGE_URL }, [h(Homepage, homepageProps)])
}
