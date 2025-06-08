import { useState } from 'react'
import './App.css'
import type { FormData, ClientInfo, PhotoSelection } from './type';
import ClientInfoForm from './components/ClientInfoForm';
import PhotoSelectionForm from './components/PhotoSelectionForm';

function Container() {

  const [formData, setFormData] = useState<FormData>({
    clientName: '',
    school: '',
    phoneNum: '',
    memberQty: 0,
    photoSelected: [],
    remark: '',
    totalPhoto: 0,
  });

  const updateClientInfo = (data: Partial<ClientInfo>) => {
    setFormData((prev) => ({ ...prev, ...data}));
  };

  const updatePhotoSelection = (data: Partial<PhotoSelection>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const handleSubmit = async () => {
    console.log('Send PDF');
    console.log(formData);
    
  };

  return (
    <div className="space-y-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold">Internal Order Form</h1>
      <ClientInfoForm formData={formData} setFormData={updateClientInfo} />
      <PhotoSelectionForm formData={formData} setFormData={updatePhotoSelection} />
      {/* <ChecklistForm formData={formData} setFormData={setFormData} />
      <PhotoUploadForm formData={formData} setFormData={setFormData} />
      <SignaturePad formData={formData} setFormData={setFormData} /> */}
      <button
        className="bg-blue-600 text-white py-2 px-4 rounded"
        onClick={handleSubmit}
      >
        Submit & Generate PDF
      </button>
    </div>
  )
}

export default Container
