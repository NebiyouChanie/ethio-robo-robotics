"use client"

import { useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'

type ProgramKey = 'VEX_IQ' | 'VEX_V5' | 'PROGRAMMING' | 'ARC'

const branches = [
  'CMC(Addis International Convention Center)',
  'Bole Tk Building',
  'Bole Reality Plaza',
  'Bisrate Gebriel',
  'Space Science and Geospatial Institute',
  'Burayu Talent Development Institute',
]

const learnerSchema = z.object({
  firstName: z.string().trim().min(1, 'First name is required'),
  lastName: z.string().trim().min(1, 'Last name is required'),
  age: z.string().trim().min(1, 'Age is required'),
  gender: z.enum(['Male','Female']),
  email: z.string().trim().min(1, 'Email is required').email('Enter a valid email'),
  phone: z.string().trim().min(1, 'Phone is required'),
  street: z.string().trim().min(1, 'Street address is required'),
  country: z.string().trim().min(1, 'Country is required'),
  region: z.string().trim().min(1, 'Region is required'),
  educationLevel: z.enum(['Elementary & Middle School','High School','College / University']),
  school: z.string().trim().min(1, 'School/Institution is required'),
  nearestBranch: z.string().trim().min(1, 'Please select nearest branch'),
})

const arcSchema = z.object({
  orgName: z.string().trim().min(1, 'School/Organization is required'),
  city: z.string().trim().min(1, 'City is required'),
  state: z.string().trim().min(1, 'State is required'),
  country: z.string().trim().min(1, 'Country is required'),
  postalCode: z.string().trim().min(1, 'Postal code is required'),
  teamName: z.string().trim().min(1, 'Team name is required'),
  numMembers: z.coerce.number().min(1, 'Number of members is required'),
  programChoice: z.enum(['VEX IQ', 'VEX V5']),
  availableDate: z.string().trim().min(1, 'Available date is required'),
  repName: z.string().trim().min(1, 'Representative name is required'),
  repEmail: z.string().trim().email('Enter a valid email'),
  repWhatsapp: z.string().trim().min(1, 'WhatsApp number is required'),
  repPhone: z.string().trim().min(1, 'Phone number is required'),
})

type ArcValues = z.infer<typeof arcSchema>

export default function RegisterPage() {
  const [program, setProgram] = useState<ProgramKey>('VEX_IQ')

  const programTitle = useMemo(() => {
    switch (program) {
      case 'VEX_IQ': return 'Elementary & Middle School Level'
      case 'VEX_V5': return 'High School to College & University Level'
      case 'PROGRAMMING': return 'Programming'
      case 'ARC': return 'Team Registration for ARC'
    }
  }, [program])

  type LearnerValues = z.infer<typeof learnerSchema>
  const learnerForm = useForm<LearnerValues>({
    resolver: zodResolver(learnerSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      age: '',
      gender: undefined as unknown as 'Male' | 'Female',
      email: '',
      phone: '',
      street: '',
      country: '',
      region: '',
      educationLevel: undefined as unknown as 'Elementary & Middle School' | 'High School' | 'College / University',
      school: '',
      nearestBranch: '',
    }
  })
  const arcForm = useForm<ArcValues>({
    resolver: zodResolver(arcSchema) as any,
    defaultValues: {
      orgName: '',
      city: '',
      state: '',
      country: '',
      postalCode: '',
      teamName: '',
      numMembers: 1,
      programChoice: undefined as unknown as 'VEX IQ' | 'VEX V5',
      availableDate: '',
      repName: '',
      repEmail: '',
      repWhatsapp: '',
      repPhone: '',
    }
  })

  const submitLearner = async (values: z.infer<typeof learnerSchema>) => {
    const divisionMap: Record<Exclude<ProgramKey,'ARC'>, string> = {
      VEX_IQ: 'VEX IQ',
      VEX_V5: 'VEX V5',
      PROGRAMMING: 'Programming',
    }
    const division = divisionMap[program as Exclude<ProgramKey,'ARC'>]
    const payload = {
      teamName: `${values.firstName} ${values.lastName}`,
      contactName: `${values.firstName} ${values.lastName}`,
      email: values.email,
      phone: values.phone,
      school: values.school,
      city: values.region,
      country: values.country,
      division,
      teamSize: undefined,
      message: `Age: ${values.age}\nGender: ${values.gender}\nStreet: ${values.street}\nEducation Level: ${values.educationLevel}\nNearest Branch: ${values.nearestBranch}`,
    }
    const res = await fetch('/api/registrations', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
    if (!res.ok) {
      let data: any = {}
      try { data = await res.json() } catch {}
      toast.error(data?.error || 'Failed to register')
      return
    }
    toast.success('Registration submitted!')
    learnerForm.reset()
  }

  const submitArc = async (values: ArcValues) => {
    const payload = {
      teamName: values.teamName,
      contactName: values.repName,
      email: values.repEmail,
      phone: values.repPhone,
      school: values.orgName,
      city: values.city,
      country: values.country,
      division: `ARC - ${values.programChoice}`,
      teamSize: values.numMembers,
      message: `State: ${values.state}\nPostal: ${values.postalCode}\nAvailable: ${values.availableDate}`,
    }
    const res = await fetch('/api/registrations', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
    if (!res.ok) {
      let data: any = {}
      try { data = await res.json() } catch {}
      toast.error(data?.error || 'Failed to register')
      return
    }
    toast.success('Team registered!')
    arcForm.reset()
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-semibold">Get involved to <span className="text-cyan-400">Design, Build, and Program!</span></h1>
            <p className="text-gray-300 mt-2">Register for our comprehensive robotics programs and join thousands of students who are building the technology of tomorrow today.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Program selector */}
            <div className="space-y-6">
              {([
                { key: 'VEX_IQ', label: 'Elementary & Middle School Level', sub: 'VEX IQ' },
                { key: 'VEX_V5', label: 'High School to College & University Level', sub: 'VEX V5' },
                { key: 'PROGRAMMING', label: 'Programming', sub: 'Learn programming fundamentals' },
                { key: 'ARC', label: 'Team Registration for ARC', sub: 'Join our elite competition team' },
              ] as { key: ProgramKey, label: string, sub: string }[]).map(item => {
                const active = program === item.key
                return (
                  <button key={item.key} onClick={()=>setProgram(item.key)} type="button" className={`w-full text-left rounded-xl p-6 border transition ${active ? 'border-cyan-500 bg-cyan-500/10 shadow' : 'border-gray-700 hover:border-cyan-500/60'}`}>
                    <div className="font-medium">{item.label}</div>
                    <div className="text-xs text-gray-400 mt-1">{item.sub}</div>
                    {active && <div className="mt-2 text-cyan-400 text-xs">Selected</div>}
                  </button>
                )
              })}
            </div>

            {/* Form panel */}
            <div className="lg:col-span-2">
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                {program !== 'ARC' ? (
                  <>
                    <div className="text-center mb-6">
                      <div className="text-lg font-medium">Registration Details</div>
                      <div className="text-sm text-gray-400">Complete the form below to secure your spot in our programs</div>
                    </div>

                    <form onSubmit={learnerForm.handleSubmit(submitLearner as any)} className="space-y-6">
                      <div>
                        <div className="text-sm text-cyan-400 font-medium mb-2">Personal Information</div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <input placeholder="First Name" {...learnerForm.register('firstName')} className={`w-full px-4 py-3 bg-gray-900 border rounded-lg ${learnerForm.formState.errors.firstName ? 'border-red-500' : 'border-gray-700'}`} />
                            {learnerForm.formState.errors.firstName && <p className="text-sm text-red-400 mt-1">{learnerForm.formState.errors.firstName.message}</p>}
                          </div>
                          <div>
                            <input placeholder="Last Name" {...learnerForm.register('lastName')} className={`w-full px-4 py-3 bg-gray-900 border rounded-lg ${learnerForm.formState.errors.lastName ? 'border-red-500' : 'border-gray-700'}`} />
                            {learnerForm.formState.errors.lastName && <p className="text-sm text-red-400 mt-1">{learnerForm.formState.errors.lastName.message}</p>}
                          </div>
                          <input placeholder="Enter your age" {...learnerForm.register('age')} className={`w-full px-4 py-3 bg-gray-900 border rounded-lg ${learnerForm.formState.errors.age ? 'border-red-500' : 'border-gray-700'}`} />
                          <select {...learnerForm.register('gender')} className={`w-full px-4 py-3 bg-gray-900 border rounded-lg ${learnerForm.formState.errors.gender ? 'border-red-500' : 'border-gray-700'}`}>
                            <option value="">Select your gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                          </select>
                          <input placeholder="Enter your email" {...learnerForm.register('email')} className={`w-full px-4 py-3 bg-gray-900 border rounded-lg ${learnerForm.formState.errors.email ? 'border-red-500' : 'border-gray-700'}`} />
                          <input placeholder="Enter your phone number" {...learnerForm.register('phone')} className={`w-full px-4 py-3 bg-gray-900 border rounded-lg ${learnerForm.formState.errors.phone ? 'border-red-500' : 'border-gray-700'}`} />
                        </div>
                      </div>

                      <div>
                        <div className="text-sm text-cyan-400 font-medium mb-2">Address Information</div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <input placeholder="Enter your full address" {...learnerForm.register('street')} className={`w-full px-4 py-3 bg-gray-900 border rounded-lg ${learnerForm.formState.errors.street ? 'border-red-500' : 'border-gray-700'}`} />
                          <input placeholder="Enter your region" {...learnerForm.register('region')} className={`w-full px-4 py-3 bg-gray-900 border rounded-lg ${learnerForm.formState.errors.region ? 'border-red-500' : 'border-gray-700'}`} />
                          <input placeholder="Ethiopia" {...learnerForm.register('country')} className={`w-full px-4 py-3 bg-gray-900 border rounded-lg ${learnerForm.formState.errors.country ? 'border-red-500' : 'border-gray-700'}`} />
                        </div>
                      </div>

                      <div>
                        <div className="text-sm text-cyan-400 font-medium mb-2">Educational Background</div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <select {...learnerForm.register('educationLevel')} className={`w-full px-4 py-3 bg-gray-900 border rounded-lg ${learnerForm.formState.errors.educationLevel ? 'border-red-500' : 'border-gray-700'}`}>
                            <option value="">Select your education level</option>
                            <option value="Elementary & Middle School">Elementary & Middle School</option>
                            <option value="High School">High School</option>
                            <option value="College / University">College / University</option>
                          </select>
                          <input placeholder="Enter your school name" {...learnerForm.register('school')} className={`w-full px-4 py-3 bg-gray-900 border rounded-lg ${learnerForm.formState.errors.school ? 'border-red-500' : 'border-gray-700'}`} />
                        </div>
                      </div>

                      <div>
                        <div className="text-sm text-cyan-400 font-medium mb-2">Program Selection</div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                          <input disabled value={programTitle} className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-gray-300" />
                          <select {...learnerForm.register('nearestBranch')} className={`w-full px-4 py-3 bg-gray-900 border rounded-lg ${learnerForm.formState.errors.nearestBranch ? 'border-red-500' : 'border-gray-700'}`}>
                            <option value="">Select nearest branch</option>
                            {branches.map(b => <option key={b} value={b}>{b}</option>)}
                          </select>
                        </div>
                      </div>

                      <div className="pt-2">
                        <button type="submit" className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg">
                          Complete Registration
                        </button>
                      </div>
                    </form>
                  </>
                ) : (
                  <>
                    <div className="text-center mb-6">
                      <div className="text-lg font-medium">Team Registration</div>
                      <div className="text-sm text-gray-400">Complete the form below to register your team(s) for the competition</div>
                    </div>

                    <form onSubmit={arcForm.handleSubmit(submitArc)} className="space-y-6">
                      <div>
                        <div className="text-sm text-cyan-400 font-medium mb-2">School/Organization Information</div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <input placeholder="Enter company name" {...arcForm.register('orgName')} className={`w-full px-4 py-3 bg-gray-900 border rounded-lg ${arcForm.formState.errors.orgName ? 'border-red-500' : 'border-gray-700'}`} />
                          <input placeholder="State" {...arcForm.register('state')} className={`w-full px-4 py-3 bg-gray-900 border rounded-lg ${arcForm.formState.errors.state ? 'border-red-500' : 'border-gray-700'}`} />
                          <input placeholder="City" {...arcForm.register('city')} className={`w-full px-4 py-3 bg-gray-900 border rounded-lg ${arcForm.formState.errors.city ? 'border-red-500' : 'border-gray-700'}`} />
                          <input placeholder="Ethiopia" {...arcForm.register('country')} className={`w-full px-4 py-3 bg-gray-900 border rounded-lg ${arcForm.formState.errors.country ? 'border-red-500' : 'border-gray-700'}`} />
                          <input placeholder="Postal Code" {...arcForm.register('postalCode')} className={`w-full px-4 py-3 bg-gray-900 border rounded-lg ${arcForm.formState.errors.postalCode ? 'border-red-500' : 'border-gray-700'}`} />
                        </div>
                      </div>

                      <div>
                        <div className="text-sm text-cyan-400 font-medium mb-2">Team Information</div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <input placeholder="Team Name" {...arcForm.register('teamName')} className={`w-full px-4 py-3 bg-gray-900 border rounded-lg ${arcForm.formState.errors.teamName ? 'border-red-500' : 'border-gray-700'}`} />
                          <input type="number" min={1} placeholder="Number of Members" {...arcForm.register('numMembers', { valueAsNumber: true })} className={`w-full px-4 py-3 bg-gray-900 border rounded-lg ${arcForm.formState.errors.numMembers ? 'border-red-500' : 'border-gray-700'}`} />
                          <div className="col-span-2">
                            <div className="flex items-center gap-4 bg-gray-900 border border-gray-700 rounded-lg p-3">
                              <label className="flex items-center gap-2 text-sm">
                                <input type="radio" value="VEX IQ" {...arcForm.register('programChoice')} /> VEX IQ
                              </label>
                              <label className="flex items-center gap-2 text-sm">
                                <input type="radio" value="VEX V5" {...arcForm.register('programChoice')} /> VEX V5
                              </label>
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm text-gray-400 mb-2">Available Date</label>
                            <input placeholder="mm/dd/yyyy" {...arcForm.register('availableDate')} className={`w-full px-4 py-3 bg-gray-900 border rounded-lg ${arcForm.formState.errors.availableDate ? 'border-red-500' : 'border-gray-700'}`} />
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="text-sm text-cyan-400 font-medium mb-2">Team Representative</div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <input placeholder="Representative name" {...arcForm.register('repName')} className={`w-full px-4 py-3 bg-gray-900 border rounded-lg ${arcForm.formState.errors.repName ? 'border-red-500' : 'border-gray-700'}`} />
                          <input placeholder="Email address" {...arcForm.register('repEmail')} className={`w-full px-4 py-3 bg-gray-900 border rounded-lg ${arcForm.formState.errors.repEmail ? 'border-red-500' : 'border-gray-700'}`} />
                          <input placeholder="WhatsApp number" {...arcForm.register('repWhatsapp')} className={`w-full px-4 py-3 bg-gray-900 border rounded-lg ${arcForm.formState.errors.repWhatsapp ? 'border-red-500' : 'border-gray-700'}`} />
                          <input placeholder="Phone number" {...arcForm.register('repPhone')} className={`w-full px-4 py-3 bg-gray-900 border rounded-lg ${arcForm.formState.errors.repPhone ? 'border-red-500' : 'border-gray-700'}`} />
                        </div>
                      </div>

                      <div className="pt-2">
                        <button type="submit" className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg">
                          Register Team
                        </button>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

