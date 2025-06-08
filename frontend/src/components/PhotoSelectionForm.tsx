import React from 'react';
import type { PhotoSelection } from '../type';

// todo: fix the type and function 
// fix the checkbox under remark

interface Props{
  formData: PhotoSelection;
  setFormData: (data: Partial<PhotoSelection>) => void;
}

function PhotoSelectionForm({formData, setFormData} : Props) {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setFormData({[name]: value})
  }

  return (
   <div className="border border-black">
      <h2 className="text-lg font-semibold border border-black bg-yellow-200">Photos Selection</h2>
      <div className="grid grid-cols-10 text-left">
      {Array.from({ length: 60 }, (_, i) => {
        const num = (i + 1).toString().padStart(2, "0");
        return (
          <div className={`w-full h-8 border flex items-center text-sm `}>
            {num}
            <input
              type="text"
              name="photoSelected"
              value={formData.photoSelected[i] || ''}
              onChange={handleChange}
              className="flex-1 w-full border border-grey-300"
              placeholder=""
            />
          </div>
        );
      })}
      </div>
      <div className='flex w-full'>
        <div className='flex pl-2 w-2/3'>
          <label className="block text-sm font-medium pr-2">Remark:</label>
          <textarea
            name="remark"
            value={formData.remark}
            onChange={(e) => setFormData({ remark: e.target.value })}
            className="mt-1 pl-1block w-full border border-grey-300"
            rows={3}
            placeholder="Enter remarks"
          />
        </div>

        <div className='flex flex-col pl-2 w-1/3'>
          <div className='flex flex-col h-full'>
            <label className="flex text-sm font-medium">贈送九宮格設計團:</label>

            <div className='grid grid-cols-2'>
            <label className="flex items-center gap-2 text-sm">
              九宮格:
              <input
                type="radio"
                name="giftDesignTeamOption"
                value="none"
              />
            </label>

            <label className="flex items-center gap-2 text-sm">
              韓式：
              <input
                type="radio"
                name="giftDesignTeamOption"
                value="video"
              />
            </label>

            <label className="flex items-center gap-2 text-sm">
              八宮格:
              <input
                type="radio"
                name="giftDesignTeamOption"
                value="baEffect"
              />
            </label>

            </div>
          </div>
          <div className='text-sm text-left border border-black'>
            Total Purchase Photos: {formData.totalPhoto}
          </div>
        </div>

      </div>
    </div>
  )
}

export default PhotoSelectionForm;