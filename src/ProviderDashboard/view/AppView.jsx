import {  Dialog, DialogContent,  DialogTitle, } from '@mui/material'

const AppView = ({ open, toggleOpenVisible }) => {


  return (
    <Dialog maxWidth={'xl'} fullWidth={true} className='!h-[full] rounded-lg' onClose={toggleOpenVisible} aria-labelledby="customized-dialog-title" PaperProps={{ style: { borderRadius: 20, paddingTop: 15, paddingBottom: 15, width: 3900, } }} open={open}>
      <DialogTitle id="customized-dialog-title" onClose={toggleOpenVisible} className='!m-auto !mt-[-1rem] !font-[700] !text-[2.2rem] max-md:!text-[1rem] '>
        Download Now To Register
      </DialogTitle>
      <div className=' border-[1px] my-[0.5rem] py-[0.5rem] px-[1.5rem] !bg-gray-100 border-gray-300' >
        <DialogContent className=' items-center w-[100%] '>
          <div className='flex'>
            <div className=' max-md:w-[70%] max-md:m-auto w-[30%] h-[80%] ml-[10%]'>
              <img src="./assets/qr.png" alt="" className='w-[100%] ' />
              <h1 className='text-center text-[2rem] max-md:text-[1.2rem] font-[500] text-gray-700'>Scan Now !</h1>
              <h1 className='text-center text-[1rem] font-[500] text-gray-700'>Download our app to find your dream job</h1>
              <div className='flex gap-10 mt-8 max-md:gap-2'>
                <img src="./assets/play_store_1.png" alt="" className='w-[50%] cursor-pointer' />
                <img src="./assets/app_store_1.png" alt="" className='w-[50%] cursor-pointer' />
              </div>
            </div>
            <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] max-md:hidden">
              <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
              <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
              <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                <img src="./assets/app.jpg" className="w-[272px] h-[572px]" alt="" />
              </div>
            </div>
          </div>

        </DialogContent>
      </div>
      <div className='!m-auto py-2 '>
        <button variant="text" className='text-white bg-blue-500 px-8 py-2 rounded-xl !mb-[-3rem] font' onClick={toggleOpenVisible}>
          Cancel
        </button>

      </div>

    </Dialog>
  )
}

export default AppView