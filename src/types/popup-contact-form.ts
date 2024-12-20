export interface ContactFormData {
    fullName: string
    businessEmail: string
    contactNumber: string
    companyName: string
    companySize: string
    jobTitle: string
    budget: number
    idea: string
  }
  
  export interface ContactPopupProps {
    isOpen: boolean
    onClose: () => void
  }
  
  