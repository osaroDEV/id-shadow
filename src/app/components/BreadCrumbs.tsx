import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"

  import { IoBusinessOutline } from "react-icons/io5";
  
  
 const BreadCrumbs = () => {
    return (
      <Breadcrumb>
        <BreadcrumbList className="flex items-center justify-center space-x-2">
          <BreadcrumbItem>
            <BreadcrumbLink className='text-[.875rem] text-blue-base flex items-center'><IoBusinessOutline className="mr-2 text-xl" />Business Type</BreadcrumbLink>
          </BreadcrumbItem>
          <div className="flex -space-x-2">
            <BreadcrumbSeparator />
            <BreadcrumbSeparator />
          </div>
          <BreadcrumbItem>
            <BreadcrumbLink className='text-[.875rem]'>Contact Details</BreadcrumbLink>
          </BreadcrumbItem>
          <div className="flex -space-x-2">
            <BreadcrumbSeparator />
            <BreadcrumbSeparator />
          </div>
          <BreadcrumbItem>
            <BreadcrumbPage className='text-[.875rem]'>Business Details</BreadcrumbPage>
          </BreadcrumbItem>
          <div className="flex -space-x-2">
            <BreadcrumbSeparator />
            <BreadcrumbSeparator />
          </div>
          <BreadcrumbItem>
            <BreadcrumbPage className='text-[.875rem]'>Addons</BreadcrumbPage>
          </BreadcrumbItem>
           <div className="flex -space-x-2">
            <BreadcrumbSeparator />
            <BreadcrumbSeparator />
          </div>
          <BreadcrumbItem>
            <BreadcrumbPage className='text-[.875rem]'>Summary</BreadcrumbPage>
          </BreadcrumbItem>
          <div className="flex -space-x-2">
            <BreadcrumbSeparator />
            <BreadcrumbSeparator />
          </div>
          <BreadcrumbItem>
            <BreadcrumbPage className='text-[.875rem]'>Payment</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    )
  }
  
  export default BreadCrumbs
  