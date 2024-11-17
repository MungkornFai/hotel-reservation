import { Button } from '@/components/ui/button';
import { CirclePlus } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-label';

export default function CreateRoomCategoryModal() {
  return (
    <Dialog>
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
        <form>
          <div className='flex flex-col gap-2'>
            <div className=''>
              <Label htmlFor='room_category'>
                <span className='text-sm'>ປະເພດຫ້ອງ</span>
              </Label>
              <Input
                type='text'
                placeholder='ປະເພດຫ້ອງ'
                name='room_category'
                id='room_category'
              />
            </div>
            <div className=''>
              <Label htmlFor='description'>
                <span className='text-sm'>ລາຍລະອຽດ</span>
              </Label>
              <Input
                type='text'
                placeholder='ລາຍລະອຽດ'
                name='description'
                id='room_category'
              />
            </div>
            <div className=''>
              <Label htmlFor='base_price'>
                <span className='text-sm'>ລາຄາເລິ່ມຕົນ</span>
              </Label>
              <Input
                type='text'
                placeholder='ລາຄາເລິ່ມຕົນ'
                name='base_price'
                id='room_category'
              />
            </div>
          </div>
          <Button className='w-full mt-4 text-lg'>ສ້າງ</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
