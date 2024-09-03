"use client"
import React, { useContext, useState } from 'react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import { TEMPLATE } from '../../_components/TemplateListSec'
import Template from '@/app/(data)/Template'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { chatSession } from '@/utils/AiModel'
import { db } from '@/utils/db'
import { AIOutput } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import { TotalUsageContext } from '@/app/(auth)/(context)/TotalUsageContext'
import { useRouter } from 'next/navigation'
import { UpdaCreditUsageContext } from '@/app/(auth)/(context)/updateCreditUsageContext'

interface PROPS {
  params: {
    'template-slug': string
  }
}

function CreateNewContent(props: PROPS) {
  const selectedTemplate: TEMPLATE | undefined = Template?.find((item) => item.slug === props.params['template-slug']);

  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<string>('');
  const { user } = useUser();
  const router =useRouter();
  const {totalUsage,setTotalUsage}=useContext(TotalUsageContext);
  const {updateCreditUsage,setUpdateCreditUsage}=useContext(UpdaCreditUsageContext)

  /**
   * Used to generate content from AI
   * @param FormData
   * @returns 
   */

  const GenerateAIContent = async (FormData: any) => {
    if(totalUsage>=10000){

      console.log("Please Upgrade");
      router.push('/dashboard/billing')
      return;
    }
    setLoading(true);

    const SelectedPrompt = selectedTemplate?.aiPrompt;
    const FinalAIPrompt = JSON.stringify(FormData) + "," + SelectedPrompt;

    const result = await chatSession.sendMessage(FinalAIPrompt);

    setAiOutput(result?.response.text());
    await SaveInDb(FormData, selectedTemplate?.slug, result?.response.text());
    setLoading(false);

    setUpdateCreditUsage(Date.now())

  }

  const SaveInDb = async (formData: string, slug: string | undefined, aiResp: string) => {
    // Type guards to ensure valid inputs
    if (formData && slug && user?.primaryEmailAddress?.emailAddress) {
      try {
        const insertResult = await db.insert(AIOutput).values({
          FormData: formData,
          templateSlug: slug,
          aiResponse: aiResp,
          createdBy: user.primaryEmailAddress.emailAddress,
          createdAt: new Date().toLocaleDateString(),
        });

        console.log('Insert result:', insertResult);
      } catch (error) {
        console.error('Error inserting into database:', error);
      }
    } else {
      console.error('Missing required fields');
    }
  }

  return (
    <div className='p-10 '>
      <Link href={"/dashboard"}>
        <Button className='bg-white text-violet-400'><ArrowLeft />Simon, Go Back!</Button>
      </Link>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5'>
        <FormSection 
          selectedTemplate={selectedTemplate}
          userFormInput={(v: any) => GenerateAIContent(v)} 
          loading={loading} 
        />
        <div className='col-span-2'>
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  )
}

export default CreateNewContent;
