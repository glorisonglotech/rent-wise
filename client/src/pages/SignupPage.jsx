import React from 'react'
import { SignupForm } from '@/components/Signup-form'

function SignupPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
      <div className="hidden md:block">
        <img
          src="https://constructionkenyashowcase.com/wp-content/uploads/2022/01/Amalia-Paradise1.jpg"
          alt="Real estate visual"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex items-center justify-center bg-background px-6 py-12">
        <SignupForm className="w-full max-w-md" />
      </div>
    </div>
  )
}

export default SignupPage
