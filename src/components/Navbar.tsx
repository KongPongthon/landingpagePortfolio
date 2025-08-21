import { CustomButton } from './CustomButton';

const Navbar = () => {
  return (
    <div className='shadow-sm hidden md:flex md:justify-between p-5'>
      <div className='text-xl'>Pongsathon Meewaewsaeng</div>
      <div className='flex gap-5 items-center'>
        <div>Home</div>
        <div>About</div>
        <div>Projects</div>
        <CustomButton name='Contact Me' className='' />
      </div>
    </div>
  );
};

export default Navbar;
