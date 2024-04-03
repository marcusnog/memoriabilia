import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';


const Account: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex justify-center p-5 mt-72 w-full">
      <div className='w-6/12 border rounded-sm p-5 shadow-xl'>
        <div className='flex justify-center h-72'>
          <div className='w-3/6 mt-5'>
            <div className='mt-2'>
              <label htmlFor="name">Nome</label>
              <Input
                className='w-full'
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className='mt-5'>
              <label htmlFor="email">Email</label>
              <Input
                className='w-full mt-2'
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className='flex justify-end'>
              <Button className='mt-5' type="submit" onClick={handleSubmit}>Editar</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
