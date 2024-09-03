"use client";
import React, { useState } from 'react';
import { TEMPLATE } from '../../_components/TemplateListSec';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader2Icon } from 'lucide-react';

interface PROPS {
    selectedTemplate?: TEMPLATE;
    userFormInput: (data: any) => void; // Typing for the function prop
    loading:boolean;
}

function FormSection({ selectedTemplate, userFormInput,loading }: PROPS) {
    const [formData, setFormData] = useState<{ [key: string]: string | undefined }>({});

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        userFormInput(formData);
    };

    return (
        <div className='p-5 shadow-lg border rounded-lg bg-white'>
            <Image
                src={selectedTemplate?.icon || '/default-icon.png'} // Default image as fallback
                alt='icon'
                width={70}
                height={70}
            />
            <h2 className='font-bold text mb-2 text-violet-500'>{selectedTemplate?.name}</h2>
            <p className='text-gray-500 text-sm'>{selectedTemplate?.desc}</p>

            <form className='mt-6' onSubmit={onSubmit}>
                {selectedTemplate?.form?.map((item, index) => (
                    <div className='my-2 flex flex-col gap-2 mb-7' key={index}>
                        <label className='font-bold'>{item.label}</label>

                        {item.field === 'input' && (
                            <Input
                                name={item.name}
                                required={item?.required}
                                onChange={handleInputChange}
                            />
                        )}

                        {item.field === 'textarea' && (
                            <Textarea
                                name={item.name}
                                required={item?.required}
                                onChange={handleInputChange}
                            />
                        )}

                        {item.field === 'dropdown' && item.options && (
                            <select
                                name={item.name}
                                required={item?.required}
                                onChange={handleInputChange}
                                className="p-2 border rounded-lg"
                            >
                                {item.options.map((option, idx) => (
                                    <option key={idx} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        )}
                    </div>
                ))}
                <Button type='submit' className='w-full py-6 bg-violet-500' disabled={loading}>
                   {loading&&<Loader2Icon className='animate-spin'/>} Generate Content
                    </Button>
            </form>
        </div>
    );
}

export default FormSection;
