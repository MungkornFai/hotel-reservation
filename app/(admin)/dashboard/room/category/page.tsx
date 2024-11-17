import CreateRoomCategoryModal from './create.room.category.modal';

export default function RoomCategory() {
  return (
    <div className='min-h-dvh p-4 w-full'>
      <div className='flex items-center justify-between'>
        <h1 className='text-base md:text-md '>ຈັດການປະເພດຫ້ອງ</h1>
        <CreateRoomCategoryModal />
      </div>
    </div>
  );
}
