import type { DepartmentData, StudioDepartment, PhotographyDepartment, DesignDepartment, ProductionDepartment} from '../type';
import StudioDepartmentForm from './Department/StudioDepartmentForm';
import PhotographyDepartmentForm from './Department/PhotographyDepartmentForm';
import DesignDepartmentForm from './Department/DesignDepartmentForm';
import ProductionDepartmentForm from './Department/ProdcutionDepartmentForm';

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
      <ProductionDepartmentForm
        formData={formData.product}
        setFormData={(data: Partial<ProductionDepartment>) =>
          setFormData({ product: { ...formData.product, ...data } })
        }
      />
    </div>
  )
}

export default DepartmentForm;