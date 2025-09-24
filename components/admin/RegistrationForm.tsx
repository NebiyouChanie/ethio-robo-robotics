'use client'

import { useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
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

export default function RegistrationForm({ initial }: { initial?: any }) {
  const router = useRouter()

  // Determine initial program from existing registration, if any
  const initialProgram: ProgramKey = initial?.division?.startsWith('ARC')
    ? 'ARC'
    : initial?.division === 'VEX V5'
      ? 'VEX_V5'
      : initial?.division === 'Programming'
        ? 'PROGRAMMING'
        : 'VEX_IQ'

  const [program, setProgram] = useState<ProgramKey>(initialProgram)

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
    defaultValues: initial && initial.division && initialProgram !== 'ARC' ? {
      firstName: (initial.contactName || '').split(' ')[0] || '',
      lastName: (initial.contactName || '').split(' ').slice(1).join(' ') || '',
      age: '',
      gender: undefined as unknown as 'Male'|'Female',
      email: initial.email || '',
      phone: initial.phone || '',
      street: '',
      country: initial.country || '',
      region: initial.city || '',
      educationLevel: undefined as unknown as 'Elementary & Middle School'|'High School'|'College / University',
      school: initial.school || '',
      nearestBranch: '',
    } : {
      firstName: '', lastName: '', age: '', gender: undefined as unknown as 'Male'|'Female', email: '', phone: '',
      street: '', country: '', region: '', educationLevel: undefined as unknown as 'Elementary & Middle School'|'High School'|'College / University', school: '', nearestBranch: ''
    }
  })

  type ArcValues = z.infer<typeof arcSchema>
  const arcForm = useForm<ArcValues>({
    resolver: zodResolver(arcSchema) as any,
    defaultValues: initial && initial.division && initialProgram === 'ARC' ? {
      orgName: initial.school || '',
      city: initial.city || '',
      state: '',
      country: initial.country || '',
      postalCode: '',
      teamName: initial.teamName || '',
      numMembers: initial.teamSize || 1,
      programChoice: (initial.division?.includes('VEX V5') ? 'VEX V5' : 'VEX IQ') as 'VEX IQ'|'VEX V5',
      availableDate: '',
      repName: initial.contactName || '',
      repEmail: initial.email || '',
      repWhatsapp: '',
      repPhone: initial.phone || '',
    } : {
      orgName: '', city: '', state: '', country: '', postalCode: '', teamName: '', numMembers: 1,
      programChoice: undefined as unknown as 'VEX IQ'|'VEX V5', availableDate: '', repName: '', repEmail: '', repWhatsapp: '', repPhone: ''
    }
  })

  const submitLearner = async (values: LearnerValues) => {
    const divisionMap: Record<Exclude<ProgramKey,'ARC'>, string> = {
      VEX_IQ: 'VEX IQ', VEX_V5: 'VEX V5', PROGRAMMING: 'Programming'
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
      age: values.age,
      gender: values.gender,
      street: values.street,
      region: values.region,
      education: values.educationLevel,
      nearest: values.nearestBranch,
    }
    const url = initial?.id ? `/api/registrations/${initial.id}` : '/api/registrations'
    const method = initial?.id ? 'PATCH' : 'POST'
    const res = await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
    if (!res.ok) { let d:any={}; try{d=await res.json()}catch{}; toast.error(d?.error||'Failed to register'); return }
    toast.success('Registration submitted!')
    if (!initial?.id) learnerForm.reset()
    router.push('/admin/registrations')
    router.refresh()
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
      state: values.state,
      postalCode: values.postalCode,
      availableOn: values.availableDate,
      whatsapp: values.repWhatsapp,
    }
    const url = initial?.id ? `/api/registrations/${initial.id}` : '/api/registrations'
    const method = initial?.id ? 'PATCH' : 'POST'
    const res = await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
    if (!res.ok) { let d:any={}; try{d=await res.json()}catch{}; toast.error(d?.error||'Failed to register'); return }
    toast.success('Team registered!')
    if (!initial?.id) arcForm.reset()
    router.push('/admin/registrations')
    router.refresh()
  }

  return (
    <div className="space-y-6">
      {/* Program selector (full width) */}
        <div className="text-sm text-gray-400">Choose your program</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
      <div>
        <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
          {program !== 'ARC' ? (
            <>
              <div className="text-center mb-6">
                <div className="text-lg font-medium">Registration Details</div>
                <div className="text-sm text-gray-400">Complete the form below to secure the spot</div>
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
                    <input placeholder="Country" {...learnerForm.register('country')} className={`w-full px-4 py-3 bg-gray-900 border rounded-lg ${learnerForm.formState.errors.country ? 'border-red-500' : 'border-gray-700'}`} />
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
                  <button type="submit" className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg">Save Registration</button>
                </div>
              </form>
            </>
          ) : (
            <>
              <div className="text-center mb-6">
                <div className="text-lg font-medium">Team Registration</div>
                <div className="text-sm text-gray-400">Complete the form to register the team</div>
              </div>

              <form onSubmit={arcForm.handleSubmit(submitArc)} className="space-y-6">
                <div>
                  <div className="text-sm text-cyan-400 font-medium mb-2">School/Organization Information</div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input placeholder="Enter company name" {...arcForm.register('orgName')} className={`w-full px-4 py-3 bg-gray-900 border rounded-lg ${arcForm.formState.errors.orgName ? 'border-red-500' : 'border-gray-700'}`} />
                    <input placeholder="State" {...arcForm.register('state')} className={`w-full px-4 py-3 bg-gray-900 border rounded-lg ${arcForm.formState.errors.state ? 'border-red-500' : 'border-gray-700'}`} />
                    <input placeholder="City" {...arcForm.register('city')} className={`w-full px-4 py-3 bg-gray-900 border rounded-lg ${arcForm.formState.errors.city ? 'border-red-500' : 'border-gray-700'}`} />
                    <input placeholder="Country" {...arcForm.register('country')} className={`w-full px-4 py-3 bg-gray-900 border rounded-lg ${arcForm.formState.errors.country ? 'border-red-500' : 'border-gray-700'}`} />
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
                  <button type="submit" className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg">Save Registration</button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}



