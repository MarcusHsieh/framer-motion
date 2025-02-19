import Wrapper1 from '@/components/Wrapper1';
import Wrapper2 from '@/components/Wrapper2';

const Home = () => {
  return (
    <div className='flex flex-col gap-4 text-center justify-center items-center py-4 w-screen-full h-screen-full bg-gray-400'>
      {/* animated grid */}
      animated grid
      <Wrapper1 />

      {/* normal grid */}
      normal grid
      <Wrapper2 />
    </div>
  );
};

export default Home;
