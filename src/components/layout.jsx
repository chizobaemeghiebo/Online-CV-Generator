import General from './general'
import Education from './education'
import Experience from './experience'
import Skills from './skills'
const layout = () => {
  return (
    <div className='container mx-auto max-w-screen-sm'>
      <General />
      <Education />
      <Experience />
      <Skills />
    </div>
  )
}

export default layout
