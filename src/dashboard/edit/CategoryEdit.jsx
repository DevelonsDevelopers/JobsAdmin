import React, { useEffect, useState } from 'react'
import PortalLayout from '../../portalLayout/PortalLayout'
import { useDispatch, useSelector } from 'react-redux'
import { getCategory, updateCategory } from '../../store/actions/categoryActions';
import { useLocation, useNavigate } from 'react-router-dom';

const CategoryEdit = () => {
  // const category = useSelector((state) => currentId ? state.category.categories.find((c) => c.id === currentId) : null)
  const params = useLocation();
  const id = params.state.ID;
  const navigate = useNavigate();
  const [categoryData, setCategoryData] = useState({ name: '', image: '', description: '' })
  // const { id } = route.params
  // console.log (id)
  const category = useSelector(state => state.category.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategory(id))
  }, [dispatch])

  useEffect(() => {
    if(category){
      setCategoryData({ name: category?.name, image: category?.image, description: category?.description })
    }
  }, [category])

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(updateCategory(id,categoryData))
    navigate('/categories')
  }

  const ClickInput = (e) => {
    setCategoryData(prev => ({...prev,[e.target.name]: e.target.value}))
  }
  console.log(categoryData)



  // useEffect(() => {
  //   dispatch(updateCategory(id))
  // }, [dispatch])



  return (
    <PortalLayout>
    <h1 className='text-center bg-gradient-to-r from-sky-600 to-cyan-400  text-white font-[600] mb-5 py-4 rounded-xl shadow-md shadow-blue-300 text-[1.5rem]'>EDIT CATEGORY</h1>
    {/* <div class="bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4 flex flex-col  my-2">
      <form action="">

      
  <div class="-mx-3 md:flex mb-6 justify-center">
    <div class="md:w-[60%] px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-Name">
        Name
      </label>
      <input onChange={ClickInput} value={categoryData.name} type="text" name="name" id="floating_email" className="pl-4 block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent rounded-xl p-2 border-2 border-gray-300 appearance-none    border-gray-600  focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Name" required />
    </div>
  </div>
  <div class="-mx-3 md:flex mb-6 justify-center">
    <div class="md:w-[60%] px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-Name">
        Image
      </label>
      <input onChange={ClickInput} value={categoryData.image} type="text" name="image" id="floating_email" className="pl-4 block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent rounded-xl p-2 border-2 border-gray-300 appearance-none    border-gray-600  focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Paste Img URL ......" required />
    </div>
  </div>
  <div class="-mx-3 md:flex mb-6 justify-center">
    <div class="md:w-[60%] px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-Name">
        Description
      </label>
      <textarea onChange={ClickInput} value={categoryData.description} name='description' class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 rounded-xl mb-3 border-2 border-gray-300 appearance-none    border-gray-600  focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" id="grid-Name" type="text" placeholder="Enter Description"/>
    </div>
  </div>
  
<div className='flex justify-center'>
  <input onClick={handleSubmit} type='submit' className='cursor-pointer text-white bg-gradient-to-r from-sky-600 to-cyan-400  font-[600] py-2 px-[3rem] mt-4 rounded-lg' value="Submit" />
</div>
</form>

</div> */}

<div className="bg-white shadow-md rounded-xl px-[10rem] max-md:px-4 pt-10 pb-8 mb-4 flex flex-col  my-2">
        <form action="">
          <div className='grid grid-cols-2 gap-10 max-md:grid-cols-1 '>
            <div className='flex-col'>
              <div className="-mx-3 mt-[-1.2rem] mb-6">
                <div className="w-[100%] px-3 mb-6 md:mb-0">
                  <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
                    Name
                  </label>
                  <input value={categoryData.name} type="text" name="name" id="floating_email" onChange={ClickInput} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Job" required />
                </div>
              </div>
              <div className="-mx-3 mt-5">
                <div className="w-[100%]  px-3">
                  <label className="block uppercase tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-Name">
                    Description
                  </label>
                  <textarea value={categoryData.description} name='description'  minLength='30' maxLength='500' rows='7' onChange={ClickInput} className="appearance-none block w-full bg-gray-50  border-gray-lighter rounded py-3 px-4 rounded-[9px] mb-3 border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer text-[14px]" id="grid-Name" type="text" placeholder="Enter Description" />
                </div>
              </div>
            </div>

            <div className=" w-full max-md:mt-[-25px]">
              <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 ">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg className="w-8 h-8 mb-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 "><span className="font-semibold">Click to upload</span> or drag and drop</p>
                  <p className="text-xs text-gray-500 ">SVG, PNG, JPG or GIF</p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" onChange={ClickInput} />
              </label>
            </div>

          </div>


          <div className='flex justify-center'>
            <input type='submit' onClick={handleSubmit} className='bg-gradient-to-r from-sky-600 to-cyan-400 cursor-pointer text-white font-[500] py-2 px-[2.4rem] mt-4 rounded-lg text-[1rem]' value="Submit" />
          </div>
        </form>

      </div>



</PortalLayout>
  )
}

export default CategoryEdit
