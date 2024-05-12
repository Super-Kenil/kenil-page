type ContributionType = {
  name: string
  link: string
}

const Contributions = () => {

  const contributions: Array<ContributionType> = [
    {
      name: 'Material UI',
      link: 'https://github.com/mui/material-ui'
    },
    {
      name: 'Jarallax',
      link: 'https://github.com/nk-o/jarallax'
    },
  ]

  return (
    <div className='text-white h-screen flex justify-center items-center flex-col'>

      {contributions.map((contribution, idx) => (
        <a key={idx} href={contribution.link} target='_blank' className='hover:text-lime-400 text-lg mb-1.5'>{idx + 1}. {contribution.name}</a>
      ))}

    </div>
  )
}

export default Contributions