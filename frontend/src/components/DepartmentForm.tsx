import type { DepartmentData, StudioDepartment, PhotographyDepartment, DesignDepartment} from '../type';
import StudioDepartmentForm from './Department/StudioDepartmentForm';
import PhotographyDepartmentForm from './Department/PhotographyDepartmentForm';
import DesignDepartmentForm from './Department/DesignDepartmentForm';

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
      <DesignDepartmentForm
        formData={formData.design}
        setFormData={(data: Partial<DesignDepartment>) =>
          setFormData({ design: { ...formData.design, ...data } })
        }
      />
    </div>
  )
}

export default DepartmentForm;