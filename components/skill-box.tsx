import Image from 'next/image'

interface ISkillBoxProps {
  title?: string
  description?: string
  logo: string
}

export function SkillBox({ title, description, logo }: ISkillBoxProps) {
  return (
    <div className='flex transform items-center divide-x-2 divide-black rounded-xl bg-white p-4 shadow-md filter transition-all hover:scale-[1.06] dark:divide-white dark:bg-[#171E28]'>
      <div className='mx-4 flex items-center justify-center dark:invert'>
        <Image width={48} height={48} src={logo} alt='logo'></Image>
      </div>
      <div className='mx-2 flex flex-col space-y-2 px-4'>
        <div className='max-w-max border-b border-black text-lg font-bold dark:border-white dark:text-white  '>
          {title}
        </div>
        <div className='font-body text-gray-600 dark:text-gray-400'>
          {description}
        </div>
      </div>
    </div>
  )
}
