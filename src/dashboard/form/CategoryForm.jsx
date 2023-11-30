import React, { useEffect, useState } from 'react'
import PortalLayout from '../../portalLayout/PortalLayout'
import { createCategory } from '../../store/actions/categoryActions'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

const CategoryForm = () => {
  const [categoryData, setCategoryData] = useState({ name: '', description: '', image: '' })
  // const [image, setImage] = useState('')
  const [Base64IMG, setBase64IMG] = useState('')
  // const [canvas, setCanvas] = useState()
  const dispatch = useDispatch()
  const navigate = useNavigate()



  const inputClick = (e) => {
    setCategoryData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    // if(e.target.name === image){
    //   setImage(e.target.files[0])
    // }
  }
  // console.log(image)
  // console.log(categoryData)

  useEffect(() => {
    setCategoryData({ ...categoryData, image: Base64IMG })
  }, [Base64IMG])

  console.log(categoryData)

  // const onChangeImage = (e) => {
  //   // console.log(e.target.files[0])
  //   setImage(e.target.files[0])
  // }
  // useEffect(() => {
  //   console.log(image)
  // }, [image])


  const handleSubmit = (e) => {
    e.preventDefault()
    if (categoryData.name && categoryData.description && categoryData.image) {
      dispatch(createCategory(categoryData))
      navigate('/categories')
    } else {
      toast.error('Enter Full Data', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  const convertToBase64 = (e) => {
    const reader = new FileReader()
    reader.readAsDataURL(e.target.files[0])
    reader.onload = () => {
      var img = new Image()
      img.src = reader.result
      img.onload = () => {
        let scale = 1
        if (img.width > 1200) {
          scale = 0.1
        } else if (img.width > 1000) {
          scale = 0.15
        } else if (img.width > 800) {
          scale = 0.17
        } else if (img.width > 600) {
          scale = 0.2
        } else if (img.width > 400) {
          scale = 0.3
        } else if (img.width > 200) {
          scale = 5
        }
        base64Resize(reader.result, scale, function (image) {
          console.log(image)
          setBase64IMG(image)
        })
      }
    }


    // Base64IMG.onload =(e) =>{

    //   const MAX_WIDTH = 400
    //   const scaleSize = MAX_WIDTH / e.target.width;
    //   setCanvas.width = MAX_WIDTH
    //   setCanvas.height = e.target.height * scaleSize;

    //   const ctx = canvas.getContext("2d")

    //   ctx.drawImage(e.target, 0, 0, canvas.width, canvas.height);
    //   console.log(e.target)
    //   const srcEncoded = ctx.canvas.toDataURL(e.target, "image/jpeg")
    // }
    // reader.onerror = error => {
    //   console.log("Error:", error)
    // }
  }

  function base64Resize(sourceBase64, scale, callBack) {

    const _scale = scale;
    var img = document.createElement('img');
    img.setAttribute("src", sourceBase64);

    img.onload = () => {
      var canvas = document.createElement('canvas');
      canvas.width = img.width * _scale;
      canvas.height = img.height * _scale;

      var ctx = canvas.getContext("2d");
      var cw = canvas.width;
      var ch = canvas.height;
      var maxW = img.width * _scale;
      var maxH = img.height * _scale;

      var iw = img.width;
      var ih = img.height;
      var scl = Math.min((maxW / iw), (maxH / ih));
      var iwScaled = iw * scl;
      var ihScaled = ih * scl;
      canvas.width = iwScaled;
      canvas.height = ihScaled;
      ctx.drawImage(img, 0, 0, iwScaled, ihScaled);
      const newBase64 = canvas.toDataURL("image/png", scl);
      console.log(newBase64)

      callBack(newBase64);
    }
  }

  // console.log(Base64IMG)

  // console.log(handleSubmit)

  return (
    <PortalLayout>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <h1 className='text-center bg-black text-white font-[600] mb-5 py-4 rounded-[8px] shadow-lg text-[1.5rem]'>ADD CATEGORY</h1>
      <div className="bg-yellow-400 shadow-md rounded-xl px-[10rem] max-md:px-4 py-10 mb-4 flex flex-col my-2">
        <form action="">
          <div className='grid grid-cols-2 gap-10 max-md:grid-cols-1 '>
            <div className='flex-col'>
              <div className="">
                <div className="w-[100%] mb-6 md:mb-0">
                  <label className="block tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] uppercase ml-4" htmlFor="grid-first-name">
                    Name
                  </label>
                  <input type="text" name="name" id="floating_email" onChange={inputClick} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-100 rounded-[8px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Job" required />
                </div>
              </div>
              <div className="-mx-3 mt-5">
                <div className="w-[100%]  px-3">
                  <label className="block uppercase tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" htmlFor="grid-Name">
                    Description
                  </label>
                  <textarea name='description' minLength='30' maxLength='500' rows='7' onChange={inputClick} className="block w-full bg-gray-100  border-gray-lighter rounded-[8px] py-3 px-4 mb-3 border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer text-[14px]" id="grid-Name" type="text" placeholder="Enter Description" />
                </div>
              </div>
            </div>

            <div className=" w-full max-md:mt-[-25px]">
            <label className="block uppercase tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" htmlFor="grid-Name">
                    Image
            </label>
              <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-[8px] cursor-pointer bg-gray-100 ">
                {Base64IMG ?
                  <>
                    <img src={Base64IMG.toString()} alt="" className='h-full w-full object-cover rounded-md' />
                    <input id="dropzone-file" type="file" name='image' className="hidden" onChange={convertToBase64} />
                  </> :
                  <>
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg className="w-8 h-8 mb-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                      </svg>
                      <p className="mb-2 text-sm text-gray-500 "><span className="font-semibold">Click to upload</span> or drag and drop</p>
                      <p className="text-xs text-gray-500 ">SVG, PNG, JPG or GIF</p>
                      <input id="dropzone-file" type="file" name='image' className="hidden" onChange={convertToBase64} />
                    </div>
                  </>
                }
              </label>
            </div>

          </div>


          <div className="flex justify-center">
            <input
              type="submit"
              onClick={handleSubmit}
              className="bg-black text-white hover:bg-yellow-400 hover:text-black border-2 transition-all ease-in-out duration-75 border-black font-[600] py-2 px-[2.4rem] mt-5 cursor-pointer rounded-[9px] text-[1rem]"
              value="Submit"
            />
          </div>
        </form>

      </div>



    </PortalLayout>
  )
}

export default CategoryForm
