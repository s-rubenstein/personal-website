import { a, div, h, h1, li, p, ol } from 'react-hyperscript-helpers'
import { Route } from 'react-router-dom'
import { styles as generalStyles } from 'src/utils/styles'


export const DEI_PROFESSION_URL = '/blog/diversity-profession'
export const DEI_PROFESSION_TITLE = 'Diversity, Equity, and Inclusion Need to be Professions'

const DeiProfession = () => {
  return div({ style: { ...generalStyles.pageContainer,} }, [
    h1([DEI_PROFESSION_TITLE]),
    p(['You\'re software engineering company is probably not equitable if you don\'t have a diversity department. ' +
    'This is because Diversity, Equity, and Inclusion (DEI) require time, like any other work that is meaningful. ' +
    'If there is not a DEI role at your company, then the work is either not getting done, or it is being done by ' +
    'volunteers who are sacrificing their career growth. Tanya Reilly has a fantastic ',
    a({ href: 'https://noidea.dog/glue' }, ['talk here']),
    ' (content warning discussion on gender from a binary POV) where she outlines how it can be problematic to do work ' +
    'that is not considered \'promotable\', However, that is always problematic for everyone, how does this make things ' +
    'specifically inequitable?']),
    p(['Well, thank you for asking! Unfortunately, DEI labor tends to fall disproportionately on those most affected. ',
      a({ href: 'https://www.washingtonpost.com/technology/2020/06/26/black-ergs-tech/' }, ['Here']),
      ' is an article that discusses how ERGs (or Employee Resource Groups) are often asked to fix problems ' +
      'relating to discrimination targeted towards them. The article specifically discusses black folks ' +
      'being asked to fix race issues, but it is also true of labor around racism targeted towards different ' +
      'racial identities, trans folks, gender minorities, queer folks, neurodivergent folks, disabled folks, etc. ' +
      'If these folks are disproportionately shouldering this work, which needs to happen for psychological safety at work ' +
      'and it is not directly \'part\' of your promotion ladder, the promotion ladder is not equitable. ']),
    p(['At this point, there are two ways to approach fixing this equity problem:']),
    ol([
      li(['Hire someone who\'s job it is to manage your company\'s DEI strategy. This ' +
      'needs to be scalable. For example, who manages making sure each individual product you release is ' +
      'inclusive? I cannot count on one hand the number of times I have been at product demos and needed to bring up ' +
      'that gender was being represented in a binary way. Oftentimes one person cannot handle all DEI issues. They need a team ' +
      'proportional to the size of the group they are expected to manage.']),
      li(['Make DEI work part of the promotion ladder. In my experience, this is often preferred, and framed as \'participating in group culture\'. ' +
      'However, group culture is very broad, and doesn\'t line up exactly right. For example, mentoring is often viewed ' +
      'as part of participating in culture, but is building the skills you use on the job, and therefore is not equivalent to DEI work, ' +
      'which is often not considered to be building concrete skills key to the job. It does build leadership, but that only works if you ' +
      'consider leadership to be as necessary as coding, which translates not promoting someone off of only individual contributions, or ' +
      'promoting people based on the impact they have on the people around them. (And not promoting to the side, as a manager or a Technical Product Manager, ' +
      'but actually giving technical weight behind their new role.'])
    ])
  ])
}

export const DeiProfessionRoute = () => {
  return h(Route, { exact: true, path: DEI_PROFESSION_URL }, [h(DeiProfession)])
}
