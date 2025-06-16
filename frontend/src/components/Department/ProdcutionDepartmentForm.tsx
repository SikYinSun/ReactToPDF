import type { ProductionDepartment } from "../../type";

interface Props {
  formData: ProductionDepartment;
  setFormData: (data: Partial<ProductionDepartment>) => void;
}

function ProductionDepartmentForm({formData, setFormData} : Props) {
  return (
    <div className="flex flex-col border border-black">
      <h2 className="text-md border-b border-black bg-green-300">Production Department</h2>
      <div className="h-full flex flex-col pl-2 gap-1 p-1 bg-green-200">
        <label className="flex items-center gap-2">
          Delivery Date:
        </label>
        <input
          type="date"
          value={formData.deliveryDate}
          onChange={(e) => setFormData({ deliveryDate: e.target.value })}
          className="border border-grey-300 p-1"
        />

      </div>
    </div>
  )
}

export default ProductionDepartmentForm;