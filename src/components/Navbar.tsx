import { CustomButton } from './CustomButton';

const Navbar = () => {
  return (
    <div className='hidden md:block p-5 px-10 text-center'>
      <div className='border border-orange-400 md:flex md:justify-between p-2 shadow-md'>
        <div className='text-xl'>Pongsathon Meewaewsaeng</div>
        <div className='flex gap-5 items-center'>
          <div>Home</div>
          <div>About</div>
          <div>Projects</div>
          <CustomButton name='Contact Me' className='' />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
