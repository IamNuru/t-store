import React from 'react'

const Address = () => {
    return (
        <div className="w-full ml-4">
            <div className="font-semibold text-center">@Username</div>
      <div className=" grid grid-cols-1 md:grid-cols-2 w-full md:w-2/3 lg:w-1/2 m-auto bg-gray-100 mt-1 h-full pb-32 pl-4">
        
        <div className="flex py-2">
          <label className="w-32 text-gray-600 text-right pr-4">Country</label>
          <div className="ml-1">Nigeria</div>
        </div>
        <div className="flex py-2">
          <label className="w-32 text-gray-600 text-right pr-4">State</label>
          <div className="ml-1">Town</div>
        </div>
        <div className="flex py-2">
          <label className="w-32 text-gray-600 text-right pr-4">Town</label>
          <div className="ml-1">Kumasi</div>
        </div>
        <div className="flex py-2">
          <label className="w-32 text-gray-600 text-right pr-4">Box</label>
          <div className="ml-1">2344</div>
        </div>
      </div>
    </div>
    )
}

export default Address
