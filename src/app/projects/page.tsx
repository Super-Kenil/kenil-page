type ProjectType = {
  name: string
  link: string
}

const Projects = () => {

  const projects: Array<ProjectType> = [
    {
      name: 'Velocity Builder Clone',
      link: 'https://super-kenil.github.io/superkenil/builder-io/'
    },
    {
      name: 'Propose',
      link: 'https://super-kenil.github.io/superkenil/propose'
    },
    {
      name: 'Super Detype',
      link: 'https://www.npmjs.com/package/super-detype'
    },
  ]

  return (
    <div className='text-white h-screen flex justify-center items-center flex-col'>

      {projects.map((project, idx) => (
        <a key={idx} href={project.link} target='_blank' className='hover:text-lime-400 text-lg mb-1.5'>{idx + 1}. {project.name}</a>
      ))}

    </div>
  )
}

export default Projects