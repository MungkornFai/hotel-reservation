import { z } from 'zod';

export const FormCreateRoomCategorySchema = z.object({
  room_category: z.string().min(1, 'ປ້ອນປະເພດຫ້ອງ'),
  description: z.string().min(1, {
    message: 'ປ້ອນລາຍລະອຽດຫ້ອງ',
  }),
  base_price: z
    .string()
    .min(1, 'ກະລຸນາປ້ອນຈຳນວນເງິນ.')
    .regex(/^[-]?\d+$/, {
      message: 'ຈຳນວນເງິນຕ້ອງເປັນຕົວເລກເທົ່ານັ້ນ.',
    })
    .refine((value) => Number(value) >= 0, {
      message: 'ປ້ອນຈຳນວນເງິນບໍ່ຖືກຕ້ອງ.',
    }),
});
