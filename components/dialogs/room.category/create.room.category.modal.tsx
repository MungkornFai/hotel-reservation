'use client';
import { CirclePlus } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormCreateRoomCategorySchema } from './schema';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,

} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { createRoomCategory } from '@/actions/create.room.category';

export default function CreateRoomCategoryModal() {
  const [isOpen, setIsOpen] = useState(false);
  // const [state, action] = useFormState(createRoomCategory, undefined);
  // const { pending } = useFormStatus();
  const form = useForm<z.infer<typeof FormCreateRoomCategorySchema>>({
    resolver: zodResolver(FormCreateRoomCategorySchema),
    defaultValues: {
      room_category: '',
      description: '',
      base_price: '',
    },
  });

  const handleFormSubmit = async (
    values: z.infer<typeof FormCreateRoomCategorySchema>
  ) => {
    const { data } = await createRoomCategory(values);
    console.log(data);
  };

  return (
    <div className=''>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button className='bg-blue-300 text-black hover:bg-blue-500 duration-200 transition-all ease-in-out'>
            ເພິ່ມປະເພດຫ້ອງ
            <CirclePlus size={20} />
          </Button>
        </DialogTrigger>
        <DialogContent className='w-[400px] md:w-[600px]'>
          <DialogHeader>
            <DialogTitle className=' text-left font-noto text-xlg'>
              ເພິ່ມປະເພດຫ້ອງ
            </DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form
              onChange={form.handleSubmit(handleFormSubmit)}
              className='flex flex-col gap-4'
            >
              <FormField
                name='room_category'
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ຊື່ປະເພດຫ້ອງ</FormLabel>
                    <FormControl>
                      <Input placeholder='ຊື່ປະເພດຫ້ອງ' {...field} />
                    </FormControl>
                    
                  </FormItem>
                )}
              />
              <FormField
                name='description'
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ລາຍລະອຽດ</FormLabel>
                    <FormControl>
                      <Input placeholder='ລາຍລະອຽດ' {...field} />
                    </FormControl>
                   
                  </FormItem>
                )}
              />
              <FormField
                name='base_price'
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ລາຄາ</FormLabel>
                    <FormControl>
                      <Input placeholder='ລາຄາ' {...field} />
                    </FormControl>
                  
                  </FormItem>
                )}
              />
        
              <Button type='submit'>Submit</Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
