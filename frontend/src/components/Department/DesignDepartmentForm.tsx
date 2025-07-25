import type { DesignDepartment } from "../../type";

interface Props {
  formData: DesignDepartment;
  setFormData: (data: Partial<DesignDepartment>) => void;
}

function DesignDepartmentForm({formData, setFormData} : Props) {
  return (
    <div className="flex flex-col border border-black">
      <h2 className="text-md border-b border-black bg-orange-300">Design Department</h2>
      <div className="h-full flex flex-col gap-1 p-1 pl-2 bg-orange-100">
        <label className="flex items-center gap-2">
          Designer:
        </label>
        <input
          type="text"
          value={formData.designer}
          onChange={(e) => setFormData({ designer: e.target.value })}
          className="border border-grey-300 p-1"
        />

        <label className="flex items-center gap-2">
          Design Checked By:
        </label>
        <input
          type="text"
          value={formData.designChecker}
          onChange={(e) => setFormData({ designChecker: e.target.value })}
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

export default DesignDepartmentForm;