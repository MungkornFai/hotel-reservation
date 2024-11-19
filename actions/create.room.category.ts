'use server';
import z, { number } from 'zod';
import { db } from '@/drizzle/db';
import { eq } from 'drizzle-orm';
import { room_types } from '@/drizzle/schema';
import { formatPrice, formatNumberWithDots } from '@/lib/utils';
import { revalidatePath } from 'next/cache';
import { FormCreateRoomCategorySchema } from '@/components/dialogs/room.category/schema';

export type FormState =
  | {
      errors?: {
        name_room_category?: string[];
        description?: string[];
        base_price?: string[];
      };
      message?: string;
    }
  | undefined;

interface RoomCategory {
  room_category: string;
  description: string;
  base_price: string;
}

export async function createRoomCategory(values: RoomCategory) {
  const validateField = FormCreateRoomCategorySchema.safeParse(values);

  if (!validateField.success) {
    console.log('error', validateField.error);
  }
  return {
    data: validateField.data
  }
}
