export default function Today() {
  return (
    <div className='pt-16 pr-40 pb-16 pl-32'>
      <div className='flex'>
        <div className='pr-8'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-12 h-12'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
            />
          </svg>
        </div>
        <div className='w-full'>
          <div className='pt-1 pb-2 w-full'>
            <h1 className='font-sans text-4xl pb-8'>Today</h1>
            <input
              className='w-full h-12 indent-4 rounded-xl bg-zinc-200/80'
              placeholder='할 일을 입력해 주세요'
              type='text'
              name=''
              id=''
            />
          </div>
          <div className='pt-2'>
            <div className='flex w-full h-12 pt-3 pl-2 rounded-xl bg-white'>
              <div className='pt-0.5'>
                <div className='transition ease-in-out delay-200 w-5 h-5 rounded-md bg-gray-100 hover:bg-neutral-400 duration-200' />
              </div>
              <h4 className='pl-1.5 pb-1 m-0'>당근마켓 거래하기</h4>
            </div>
          </div>
          <div className='pt-2'>
            <div className='flex w-full h-12 pt-3 pl-2 rounded-xl bg-white'>
              <div className='pt-0.5'>
                <div className='transition ease-in-out delay-200 w-5 h-5 rounded-md bg-gray-100 hover:bg-neutral-400 duration-200' />
              </div>
              <h4 className='pl-1.5 pb-1 m-0'>상체 운동하기</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
