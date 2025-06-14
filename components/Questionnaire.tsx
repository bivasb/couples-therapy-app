'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'

const topics = [
  "How to get your woman to calm down",
  "Healing wounds so they don't cycle",
  "Couple Bonding Exercise",
  "How to get the spark back",
  "Your masculine-feminine energy balance",
  "Sacred sex and Tantra",
  "How to get your man to commit",
  "Healing childhood trauma"
]

export default function Questionnaire() {
  const [selectedTopics, setSelectedTopics] = useState<string[]>([])
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<{[key: string]: string}>({})

  const toggleTopic = (topic: string) => {
    setSelectedTopics(prev => 
      prev.includes(topic) 
        ? prev.filter(t => t !== topic)
        : [...prev, topic]
    )
  }

  const validate = () => {
    const newErrors: {[key: string]: string} = {}
    
    if (selectedTopics.length === 0) {
      newErrors.topics = 'Please select at least one topic'
    }
    
    if (!firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }
    
    if (!lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    }
    
    if (!email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (validate()) {
      // In a real app, this would send data to your backend
      console.log({
        topics: selectedTopics,
        firstName,
        lastName,
        email
      })
      
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-purple-50">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h2>
            <p className="text-gray-600">
              We&apos;ve received your preferences. You&apos;ll be the first to know when our app launches!
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-purple-50">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
            Help Us Build the Perfect App for You
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Select the topics you&apos;re most interested in and get notified when we launch!
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                What topics interest you? (Select all that apply)
              </h3>
              {errors.topics && (
                <p className="text-red-500 text-sm mb-3">{errors.topics}</p>
              )}
              <div className="grid md:grid-cols-2 gap-3">
                {topics.map((topic) => (
                  <label
                    key={topic}
                    className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedTopics.includes(topic)
                        ? 'border-purple-600 bg-purple-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={selectedTopics.includes(topic)}
                      onChange={() => toggleTopic(topic)}
                      className="sr-only"
                    />
                    <div className={`w-5 h-5 rounded border-2 mr-3 flex items-center justify-center ${
                      selectedTopics.includes(topic)
                        ? 'border-purple-600 bg-purple-600'
                        : 'border-gray-300'
                    }`}>
                      {selectedTopics.includes(topic) && (
                        <Check className="w-3 h-3 text-white" />
                      )}
                    </div>
                    <span className="text-gray-700">{topic}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div className="border-t pt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Get notified when we launch
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                      errors.firstName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="John"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                      errors.lastName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Doe"
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                  )}
                </div>
              </div>
              
              <div className="mt-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="john.doe@example.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                className="bg-purple-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-purple-700 transition-colors"
              >
                Submit & Get Notified
              </button>
              <p className="text-sm text-gray-500 mt-3">
                We respect your privacy and will only contact you about our app launch.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}