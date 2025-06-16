import type { PhotographyDepartment } from "../../type";

interface Props {
  formData: PhotographyDepartment;
  setFormData: (data: Partial<PhotographyDepartment>) => void;
}

function PhotographyDepartmentForm({formData, setFormData} : Props) {
  return (
    <div className="flex flex-col border border-black">
      <h2 className="text-md border-b border-black bg-yellow-300">Photography Department</h2>
      <div className="h-full flex flex-col pl-2 gap-1 p-1 bg-yellow-100">
        <label className="flex items-center gap-2">
          Photo checked by:
        </label>
        <input
          type="text"
          value={formData.photoCheck}
          onChange={(e) => setFormData({ photoCheck: e.target.value })}
          className="border border-grey-300 p-1"
        />
        
        <label className="flex items-center gap-2">
          Standard
          <input
            type="checkbox"
            checked={formData.standard}
            onChange={(e) => setFormData({ standard: e.target.checked })}
          />
        </label>
        <label className="flex items-center gap-2">
          High Standards
          <input
            type="checkbox"
            checked={formData.highStandard}
            onChange={(e) => setFormData({ highStandard: e.target.checked })}
          />
        </label>
      </div>
    </div>
  )
}

export default PhotographyDepartmentForm;