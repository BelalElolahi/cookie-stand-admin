

export default function CreateForm (formHandler) {

return (
    <form className='p-6 bg-green-300 rounded-2xl' onSubmit={()=>formHandler(e)}>
            <h2>Create Cookie Stand</h2>
            <label>location</label>
            <input type="text" name='location' className='w-9/12 my-3 bg-gray-200' placeholder={location} ></input>
            <div className='flex flex-row'>
              <div className='flex flex-col p-3'>
                <label>Minimum customer per Hour</label>
                <input type="number" name='min' className='bg-white' placeholder={min} ></input>
              </div>
              <div className='flex flex-col p-3'>
                <label>Maximum customer per Hour</label>
                <input type="number" name='max' className='bg-white' placeholder={max} ></input>
              </div>
              <div className='flex flex-col p-3'>
                <label>Avarage Cookies per sale</label>
                <input type="number" name='avg' className='bg-white' step='.1' placeholder={avg}></input>
              </div>
              <div className='flex flex-col px-3 '>
                <button className='px-8 py-4 bg-green-600' type="submit" >create</button>
              </div>
            </div>

          </form>
) 
}