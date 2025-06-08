import { useState, useRef } from 'react'
import './App.css'
import type { FormData, ClientInfo, PhotoSelection } from './type';
import ClientInfoForm from './components/ClientInfoForm';
import PhotoSelectionForm from './components/PhotoSelectionForm';
import { generatePDF } from './utils/generatePDF';


function Container() {

  const [formData, setFormData] = useState<FormData>({
    clientName: '',
    school: '',
    phoneNum: '',
    memberQty: 0,
    photoSelected: [],
    remark: '',
    giftVideo: false,
    baEffect: false,
    totalPhoto: 0,
  });

  const pdfRef = useRef<HTMLDivElement>(null);

  const updateClientInfo = (data: Partial<ClientInfo>) => {
    setFormData((prev) => ({ ...prev, ...data}));
  };

  const updatePhotoSelection = (data: Partial<PhotoSelection>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const handleSubmit = async () => {
    if (pdfRef.current) {
      await generatePDF(pdfRef.current, 'client_form.pdf');
    }
  };

  return (
    <div className='p-4'>
      <div ref={pdfRef} className="space-y-4 w-[794px] px-2 mx-auto">
        <h1 className="text-2xl font-bold">Internal Order Form</h1>
        <ClientInfoForm formData={formData} setFormData={updateClientInfo} />
        <PhotoSelectionForm formData={formData} setFormData={updatePhotoSelection} />
        {/* <ChecklistForm formData={formData} setFormData={setFormData} />
        <PhotoUploadForm formData={formData} setFormData={setFormData} />
        <SignaturePad formData={formData} setFormData={setFormData} /> */}
      </div>
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
