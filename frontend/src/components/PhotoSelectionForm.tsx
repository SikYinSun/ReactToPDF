import React from 'react';
import type { PhotoSelection } from '../type';

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

    </div>
  )
}

export default PhotoSelectionForm;