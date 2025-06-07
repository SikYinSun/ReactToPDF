import React from 'react';
import type { ClientInfo } from '../type';

interface Props {
  formData: ClientInfo;
  setFormData: (data: Partial<ClientInfo>) => void;
}

function ClientInfoForm({formData, setFormData} : Props) {

  const handleChange =(e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ [name]: value });
  };

  return (
    <div className="border border-black m-0">
      <h2 className="text-lg font-semibold border border-black bg-blue-300">Customer Information</h2>

      {/* Row 1 */}
      <div className="flex w-full">
        <div className="flex items-center w-1/3">
          <label className="w-16 font-medium border border-black">Name:</label>
          <input
            type="text"
            name="clientName"
            value={formData.clientName}
            onChange={handleChange}
            className="flex-1 w-full pl-2 border border-black"
            placeholder="John Doe"
          />
        </div>
        <div className="flex flex-1 items-center w-2/3">
          <label className="w-40 font-medium border border-black">Organization/School:</label>
          <input
            type="text"
            name="school"
            value={formData.school}
            onChange={handleChange}
            className="flex-1 pl-2 border border-black"
            placeholder="BU-250366"
          />
        </div>
      </div>

      {/* Row 2 */}
      <div className="flex w-full">
        <div className="flex items-center w-1/3">
          <label className="w-16 font-medium border border-black">Tel:</label>
          <input
            type="text"
            name="phoneNum"
            value={formData.phoneNum}
            onChange={handleChange}
            className="flex-1 w-full pl-2 border border-black"
            placeholder="62185135"
          />
        </div>
        <div className="flex flex-1 items-center w-2/3">
          <label className="w-40 font-medium border border-black">Total Member Qty:</label>
          <input
            type="text"
            name="memberQty"
            value={formData.memberQty}
            onChange={handleChange}
            className="flex-1 pl-2 border border-black"
            placeholder="4"
          />
        </div>
      </div>
    </div>
  )
}

export default ClientInfoForm