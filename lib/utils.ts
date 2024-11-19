import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { db } from '@/drizzle/db';
import { room_types } from '@/drizzle/schema';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function formatPrice(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "LAK",
  }).format(amount);
}

export function formatNumberWithDots(amount: number): number {
  // Convert the number to a string and split it into integer and decimal parts (if any)
  const [integerPart] = amount.toString().split('.');

  // Add dots as thousands separators
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  

  return parseInt(formattedInteger);
}


