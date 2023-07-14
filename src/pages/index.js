import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ahmad Sabbah - Webfolio</title>
        <meta name="description" content="Welcome to my webfolio. I am Ahmad Sabbah, an experienced full stack web developer. Explore my portfolio to see my skills and projects." />
      </Head>
      <main className='pt-10 flex text-dark min-h-screen w-8/12 m-auto items-center align-middle self-center'>
        <Layout>
          <div className="flex items-center justify-between w-full">
            <div className='flex flex-col items-center self-center'>
              <AnimatedText text="Experienced Full Stack Web Developer" className='!text-6xl text-left' />
              <p className='my-4 text-base font-medium'>
                Welcome to my webfolio! I am Ahmad Sabbah, a seasoned full stack web developer with a proven track record. With my expertise in the complete website creation process, I ensure seamless execution from inception to completion, delivering websites that exceed your expectations.
              </p>
              <div className='flex items-center self-start mt-2 mb-32'>
                <Link target='_blank' href="/AhmadSabbah_Resume.pdf" className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark hover:scale-105 transform transition duration-500' download={true}>
                  Resume
                </Link>
                <Link className='flex items-center bg-dark text-light ml-5 p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark hover:scale-105 transform transition duration-500' target='_blank' href="mailto:madesabbah@gmail.com">
                  Contact Me
                </Link>
              </div>
              <p className='my-4 text-base font-medium'>
                Throughout my career, I have worked on various web development projects, ranging from small business websites to large-scale applications. I specialize in both front-end and back-end development, and I am proficient in technologies such as JavaScript, React, Node.js, Python, Java and more.
              </p>
              <p className='my-4 text-base font-medium'>
                My passion for web development drives me to stay updated with the latest industry trends and technologies. I constantly strive to improve my skills and deliver cutting-edge solutions to my clients.
              </p>
            </div>
          </div>
          <div className='mt-16'>
            <h2 className='text-3xl font-semibold mb-4'>Skills</h2>
            <ul className='list-disc list-inside'>
              <li className='text-base font-medium'>HTML5, CSS3, and responsive web design</li>
              <li className='text-base font-medium'>JavaScript (ES6+), TypeScript</li>
              <li className='text-base font-medium'>React.js, Next.js, and Redux</li>
              <li className='text-base font-medium'>Node.js, Express.js, and RESTful APIs</li>
              <li className='text-base font-medium'>Database management (SQL, MongoDB)</li>
              <li className='text-base font-medium'>Version control with Git</li>
              <li className='text-base font-medium'>UI/UX design principles</li>
              <li className='text-base font-medium'>Testing and debugging</li>
              <li className='text-base font-medium'>Agile development methodologies</li>
              <li className='text-base font-medium'>Deployment and hosting (AWS, Heroku, Netlify)</li>
            </ul>
          </div>
        </Layout>
      </main>
    </>
  )
}
