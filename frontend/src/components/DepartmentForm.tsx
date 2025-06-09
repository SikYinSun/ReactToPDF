import type { DepartmentData, StudioDepartment, PhotographyDepartment} from '../type';
import StudioDepartmentForm from './Department/StudioDepartmentForm';
import PhotographyDepartmentForm from './Department/PhotographyDepartmentForm';

interface Props {
  formData: DepartmentData;
  setFormData: (data: Partial<DepartmentData>) => void;
}

function DepartmentForm({ formData, setFormData } : Props) {
  return (
    <div className='flex border border-black'>
      <StudioDepartmentForm
        formData={formData.studio}
        setFormData={(data: Partial<StudioDepartment>) =>
          setFormData({ studio: { ...formData.studio, ...data } })
        }
      />
      <PhotographyDepartmentForm
        formData={formData.photograph}
        setFormData={(data: Partial<PhotographyDepartment>) =>
          setFormData({ photograph: { ...formData.photograph, ...data } })
        }
      />
    </div>
  )
}

export default DepartmentForm;