import type { StudioDepartment } from "../../type";

interface Props {
  formData: StudioDepartment;
  setFormData: (data: Partial<StudioDepartment>) => void;
}

function StudioDepartmentForm({formData, setFormData} : Props) {
  return (
    <div>
      <h2 className="text-md font-semibold border border-black bg-blue-300">Studio Department</h2>
      <div className="flex flex-col pl-2 gap-1 p-1 bg-blue-200 border border-black">
        <label className="flex items-center gap-2">
          九宮格
          <input
            type="checkbox"
            checked={formData.palace}
            onChange={(e) => setFormData({ palace: e.target.checked })}
          />
        </label>
        <label className="flex items-center gap-2">
          {'>'} 120 Pcs
          <input
            type="checkbox"
            checked={formData.moreThan}
            onChange={(e) => setFormData({ moreThan: e.target.checked })}
          />
        </label>
        <label className="flex items-center gap-2">
          {'<'}120 Pcs Approved by:
        </label>
        <input
          type="text"
          value={formData.approved}
          onChange={(e) => setFormData({ approved: e.target.value })}
          className="border border-grey-300 p-1"
        />
      </div>
    </div>
  )
}

export default StudioDepartmentForm;