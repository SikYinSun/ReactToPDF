import type { DepartmentData, StudioDepartment} from '../type';
import StudioDepartmentForm from './Department/StudioDepartmentForm';

interface Props {
  formData: DepartmentData;
  setFormData: (data: Partial<DepartmentData>) => void;
}

function DepartmentForm({ formData, setFormData } : Props) {
  return (
    <div className='flex flex-col border border-black'>
      <StudioDepartmentForm
              formData={formData.studio}
              setFormData={(data: Partial<StudioDepartment>) =>
                setFormData({ studio: { ...formData.studio, ...data } })
              }
            />
    </div>
  )
}

export default DepartmentForm;