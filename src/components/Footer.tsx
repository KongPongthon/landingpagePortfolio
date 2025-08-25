import { footers } from '@/dataAndTypes/footer';

const colorClasses: Record<string, string> = {
  Github: 'hover:text-white',
  Email: 'hover:text-[#fa5252]',
  Facebook: 'hover:text-[#364fc7]',
  LinkIN: 'hover:text-[#1864ab]',
  Default: 'hover:text-[#82868c]',
};

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * Footer component for the website
 *
 * @returns {JSX.Element} Footer component
 *
 * @example
 * <Footer />
 */
/*******  9ba4576b-71cb-40bd-8699-bb68f9ea0201  *******/ const Footer = () => {
  return (
    <footer className='bg-[#F8F8F8] pt-12'>
      <p className='text-center'>Pongsathon</p>
      <div className='flex justify-center gap-12 py-5'>
        <div>Home</div>
        <div>About</div>
        <div>Projects</div>
        <div>Contact Me</div>
      </div>
      <ul className='flex justify-center gap-12 p-[1.5rem]'>
        {footers.map((footer) => {
          const { icon: Icon, id, url, name } = footer;

          return (
            <li key={id}>
              <a
                href={name.toLowerCase() === 'email' ? `mailto:${url}` : url}
                target='_blank'
                rel='noreferrer'
              >
                <Icon
                  size={30}
                  className={`text-[#b4b6ba] transition-all duration-300 hover:scale-[1.3] ${
                    colorClasses[name] || colorClasses.Default
                  }`}
                />
              </a>
            </li>
          );
        })}
      </ul>

      {/* separator */}
      {/* <div className='w-[50%] mx-auto border-b border-[#b4b6ba]' /> */}

      {/* copyright */}
      <div className='flex justify-center gap-4 pt-6 text-[#b4b6ba] tracking-wider font-semibold bg-[#545454]'>
        <span className='copyright'>&#169; {new Date().getFullYear()}</span>
        <span className='deverloper'>
          Portfolio deverloped by Pongsathon Meewaewsaeng
        </span>
      </div>
    </footer>
  );
};

export default Footer;
