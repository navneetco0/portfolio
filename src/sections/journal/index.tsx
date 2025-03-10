import { Section } from '../../@components'
import { journal_data } from '../../@assets'

const Journal = () => {
  return (
    <Section
        id='journal'
        heading={journal_data.heading}
        paragraph={journal_data.paragraph}
      />
  )
}

export default Journal